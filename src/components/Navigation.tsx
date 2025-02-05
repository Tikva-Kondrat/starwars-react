// @ts-expect-error TS(6142): Module './NavItem.jsx' was resolved to 'C:/java_59... Remove this comment to see the full error message
import NavItem from "./NavItem.jsx";
import {navItems} from "../utils/constatns.js";

const Navigation = ( {
    changePage
}: any) => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <nav className="fixed flex top-5 left-8">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ul className="flex  gap-2">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                {navItems.map((item, index) => < NavItem
                    key = {`NavItem-${index}`}
                    itemTitle={item}
                    changePage = {changePage} />)}
            </ul>
        </nav>
    );
};

export default Navigation;