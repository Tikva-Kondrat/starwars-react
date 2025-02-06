import Home from "./Home.tsx";
import {navItems} from "../utils/constatns.ts";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.tsx";
import Contact from "./contactform/Contact.tsx";

type Props = {
  page: string
}

const Main = ({page}: Props) => {
  switch (page) {
    case navItems[1]:
      return <AboutMe/>;
    case navItems[2]:
      return <StarWars/>;
    case navItems[3]:
      return <Contact/>;
    default:
      return <Home/>;
  }
};

export default Main;