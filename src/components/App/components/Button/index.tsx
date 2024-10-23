import { ReactNode } from "react";

type Props = {
<<<<<<< HEAD
    value: string,
=======
>>>>>>> rc-2
    children?: ReactNode,
    [x:string]: any
};

<<<<<<< HEAD
export const Button = ({ children, value }: Props) => {
    return (
        <div className="btns">{children}</div>
=======
export const Button = ({ children, ...rest }: Props) => {
    return (
        <div className="btns" {...rest}>{children}</div>
>>>>>>> rc-2
    );
};