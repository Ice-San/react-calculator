import { ReactNode } from "react";

type Props = {
    children?: ReactNode,
    [x:string]: any
};

export const Button = ({ children, ...rest }: Props) => {
    return (
        <div className="btns" {...rest}>{children}</div>
    );
};