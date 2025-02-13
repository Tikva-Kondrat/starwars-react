import {NavLink} from "react-router";
import {NavigationItem} from "../types/types.t.ts";

type Props = {
  item: NavigationItem,
}

const NavItem = ({item}: Props) => {
  return (
    <NavLink
      to={`/${item.path}`}
      className={`text-center bg-red-color border-black border-2 rounded-md px-3 py-2 cursor-pointer hover:bg-red-500 hover:text-white `}>
      {item.title}
    </NavLink>
  )

}

export default NavItem;