import NavItem from "./NavItem.jsx";
import {navItems} from "../utils/constatns.js";

const Navigation = ( {changePage}) => {
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