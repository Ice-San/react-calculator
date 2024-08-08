import { Button } from "../Button";

export const Calculator = () => {
    const rows = [
        [" ", "CE", "C", "/"],
        ["7", "8", "9", "*"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        [" ", "0", ".", "="]
    ];

    return (
        <div className='background'>
            <div className="calcs-background">
                <h1><span>|</span></h1>
            </div>

            <div className="btns-background">
                {rows.map((cols, index) => (
                    <div key={index} className="btns-flex">
                        {cols.map((label, index) => (<Button key={index} value={label}>{label}</Button>))}
                    </div>
                ))}
            </div>
        </div>
    );
};