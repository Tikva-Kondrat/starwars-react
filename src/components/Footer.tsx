import Button from "./ui/Button.tsx";

const Footer = () => {
    return (
        <footer  className={'h-20 rounded-b-2xl bg-grey-color grid grid-cols-7 items-center clear-both'}>
            <Button className={'col-span-1 col-start-3'}>Send me an <span
                className="text-black text-uppercase">email</span></Button>
        </footer>
    );
};

export default Footer;