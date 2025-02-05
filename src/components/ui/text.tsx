const Text = ({
    children
}: any) => {
    return(
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <p className="context__text">{children}</p>
    );
};
export default Text;