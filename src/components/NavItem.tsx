import Button from "./ui/Button.tsx";
import {SetPage} from "../types/types.t.ts";

type Props = {
    itemTitle: string,
    changePage: SetPage
}

const NavItem = ({itemTitle, changePage}: Props) => {
    return (
        <Button callback={() => changePage(itemTitle)} className="text-lg ">{itemTitle}</Button>
    );
};

export default NavItem;