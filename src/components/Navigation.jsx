import NavItem from "./NavItem.jsx";
import {navItems} from "../utils/constatns.js";

const Navigation = () => {
    return (
        <nav>
            <ul className="nav fixed-top mt-2 ms-5">
                {/* eslint-disable-next-line react/jsx-key */}
                {navItems.map(item => < NavItem itemTitle={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;