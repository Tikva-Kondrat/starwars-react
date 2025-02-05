const Button = ({
    children,
    callback,
    className
}: any) => {


    return (

        <div onClick={callback ?? (() => {
        })} className={`button__elem hover:bg-red-500 ${className??''}`}>{children}</div>
    );
};

export default Button;