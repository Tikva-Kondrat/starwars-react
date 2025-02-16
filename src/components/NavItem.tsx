import {NavLink} from "react-router";
import {NavigationItem} from "../types/types.t.ts";
import {useContext} from "react";
import {SWContext} from "../shared_data/context.ts";

type Props = {
  item: NavigationItem,
}

const NavItem = ({item}: Props) => {
  const {hero} = useContext(SWContext)
  return (
    <NavLink
      to={`/${item.path}/${hero}`}
      className={`text-center bg-red-color border-black border-2 rounded-md px-3 py-2 cursor-pointer hover:bg-red-500 hover:text-white `}>
      {item.title}
    </NavLink>
  )

}

export default NavItem;