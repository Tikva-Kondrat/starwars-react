const Button = ({ children, callback, className}) => {


    return (
        <div onClick={callback ?? (() => {
        })} className={`button__elem hover:bg-red-500 ${className??''}`}>{children}</div>
    );
};

export default Button;