// @ts-expect-error TS(6142): Module './ui/button.jsx' was resolved to 'C:/java_... Remove this comment to see the full error message
import Button from "./ui/button.jsx";

const Footer = () => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <footer  className={'h-20 rounded-b-2xl bg-grey-color grid grid-cols-7 items-center clear-both'}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button className={'col-span-1 col-start-3'}>Send me an <span
                className="text-black text-uppercase">email</span></Button>
        </footer>
    );
};

export default Footer;