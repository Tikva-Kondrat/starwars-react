import NavItem from "./NavItem.tsx";
import {navItems} from "../utils/constatns.ts";
import {SetPage} from "../types/types.t.ts";

const Navigation = ( {changePage}: {changePage: SetPage}) => {
    return (
        <nav className="fixed flex top-5 left-8">
            <ul className="flex  gap-2">
                {navItems.map((item, index) => < NavItem
                    key = {`NavItem-${index}`}
                    itemTitle={item}
                    changePage = {changePage} />)}
            </ul>
        </nav>
    );
};

export default Navigation;