import {ReactNode} from "react";

type Props = {
    children: ReactNode
    callback: () => void,
    className?: string,
}

const Button = ({ children, className, callback}: Props) => {
    return (
        <div onClick={callback} className={`button__elem hover:bg-red-500 ${className??''}`}>{children}</div>
    );
};

Button.defaultProps = {
    callback: () => {},
}

export default Button;