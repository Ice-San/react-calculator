import { ReactNode } from "react";

type Props = {
    value: string,
    children?: ReactNode,
    [x:string]: any
};

export const Button = ({ children, value }: Props) => {
    return (
        <div className="btns">{children}</div>
    );
};