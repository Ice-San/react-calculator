import { useState, useEffect } from "react";
import { Button } from "../Button";
import { isNumber } from "../../../../utils";

export const Calculator = () => {
    const [display, setDisplay] = useState('');
    const [operators, setOperators] = useState<any[]>([]);
    const [numbers, setNumbers] = useState<any[]>([]);
    const [currentNumber, setCurrentNumber] = useState('');

    const rows = [
        [" ", "CE", "C", "/"],
        ["7", "8", "9", "*"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        [" ", "0", ".", "="]
    ];

    const calc = () => numbers?.reduce((prev, current, index) => {
        const valuePrev = Number(prev);
        const valueCurrent = Number(current);
        
        if(operators[index - 1] === '+') {
            return `${valuePrev + valueCurrent}`;
        };

        if(operators[index - 1] === '-') {
            return `${valuePrev - valueCurrent}`;
        };

        if(operators[index - 1] === '*') {
            return `${valuePrev * valueCurrent}`;
        };

        if(operators[index - 1] === '/') {
            return `${valuePrev / valueCurrent}`;
        };
    });

    const reload = () => numbers.length ? numbers.reduce((prev, current, index) => `${prev}${operators[index - 1]}${current}`) : '';

    const handleReset = () => {
        setDisplay(' ');
        setOperators([]);
        setNumbers([]);
        setCurrentNumber('');
    }  

    const handleBack = () => {
        if (numbers.length > operators.length) {
            numbers.pop();
            setNumbers(numbers);

            if (operators.length > 0) {
                operators.pop();
                setOperators(operators);
            }
            
            setCurrentNumber('');
        } else {
            operators.pop();
            setOperators(operators);
        }

        setDisplay(reload());
    }

    const handleCalc = () => {
        if(numbers.length >= 1) {
            numbers.push(currentNumber);
            setNumbers(numbers);

            setCurrentNumber('');

            setDisplay(display + '=' + calc());
        }
    }

    const setOperator = (operator: string) => {
        setDisplay(display + operator);

        operators.push(operator);
        setOperators(operators);

        numbers.push(currentNumber);
        setNumbers(numbers);

        setCurrentNumber('');
    } 

    const setNumber = (number: string) => {
        setDisplay(display + number);

        setCurrentNumber(currentNumber + number);
    }

    const setDot = (dot: string) => {
        setDisplay(display + dot);

        setCurrentNumber(currentNumber + dot);
    }

    const handleResult = (value: string) => {

        if(!(display.indexOf('=') < 0)) {
            handleReset();
            return;
        }

        if(value === 'C') handleReset();

        if(value === 'CE') {
            handleBack();
            return;
        };
    
        if(value === '=') handleCalc();
        
        if(['+','-','*','/'].includes(value)) setOperator(value);
        
        if(isNumber(value)) setNumber(value);
        
        if(value === '.') setDot(value);

    };

    useEffect(() => {
        console.log('display: ', display);
    }, [display]);

    useEffect(() => {
        console.log('Operators: ', operators);
    }, [operators]);

    useEffect(() => {
        console.log('Numbers: ', numbers);
    }, [numbers]);

    useEffect(() => {
        console.log('Current Number: ', currentNumber);
    }, [currentNumber]);

    return (
        <div className='background'>
            <div className="calcs-background">
                <h1>{display}<span>|</span></h1>
            </div>

            <div className="btns-background">
                {rows.map((cols, index) => (
                    <div key={index} className="btns-flex">
                        {cols.map((label, index) => (<Button key={index} onClick={() => {handleResult(label)}}>{label}</Button>))}
                    </div>
                ))}
            </div>
        </div>
    );
};