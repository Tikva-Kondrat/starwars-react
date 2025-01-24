import NavItem from "./NavItem.jsx";
import {navItems} from "../utils/constatns.js";

const Navigation = ( {changePage}) => {
    return (
        <nav>
            <ul className="nav fixed-top mt-2 ms-5">
                {navItems.map((item, index) => < NavItem
                    key = {`NavItem-${index}`}
                    itemTitle={item}
                    changePage = {changePage} />)}
            </ul>
        </nav>
    );
};

export default Navigation;