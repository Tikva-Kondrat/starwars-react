// @ts-expect-error TS(6142): Module './ui/button.jsx' was resolved to 'C:/java_... Remove this comment to see the full error message
import Button from "./ui/button.jsx";


const NavItem = ({
    itemTitle,
    changePage
}: any) => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button callback={() => changePage(itemTitle)} className="text-lg ">{itemTitle}</Button>
    );
};

export default NavItem;