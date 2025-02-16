import Navigation from "./Navigation.tsx";
import {characters} from "../api/constants.ts";
import {useContext} from "react";
import {ErrorContext, SWContext} from "../shared_data/context.ts";

const Header = () => {
  const {isWrongRoute} = useContext(ErrorContext)
  const {hero} = useContext(SWContext)

  const title = (isWrongRoute) ? "Error" : characters.get(hero)!.name
  return (
    <header className="rounded-t-2xl bg-grey-color">
      <Navigation/>
      <h1 className="text-center text-3xl py-6">{title}</h1>
    </header>
  );
};

export default Header;