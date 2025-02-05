
import Button from "./ui/button.jsx";


const NavItem = ({
    itemTitle,
    changePage
}: any) => {
    return (
        <Button callback={() => changePage(itemTitle)} className="text-lg ">{itemTitle}</Button>
    );
};

export default NavItem;