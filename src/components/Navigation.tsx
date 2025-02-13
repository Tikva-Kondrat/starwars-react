import NavItem from "./NavItem.tsx";
import {navItems} from "../utils/constatns.ts";

const Navigation = () => {
    return (
        <nav className="fixed flex top-5 left-8">
            <ul className="flex  gap-2">
                {navItems.map((item) => < NavItem
                    key = {item.path}
                    item={item}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;