import Navigation from "./Navigation.tsx";
import {useLocation} from "react-router";
import {characters} from "../api/constants.ts";

const Header = () => {
  const location = useLocation();
  let title = 'Luke Skywalker'

  // if this is about page and there's a character name as a param
  const params = location.pathname.split('/')
  if (params.indexOf('about_me') !== -1) {
    params.forEach((param) => {
      if (characters.has(param.toLowerCase())) {
        title = characters.get(param.toLowerCase())!.name
      }
    })
  }

  return (
    <header className="rounded-t-2xl bg-grey-color">
      <Navigation/>
      <h1 className="text-center text-3xl py-6">{title}</h1>
    </header>
  );
};

export default Header;