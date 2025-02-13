import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.tsx";
import Contact from "./contactform/Contact.tsx";
import {Route, Routes} from "react-router";
import {navItems} from "../utils/constatns.ts";
import NotFoundPage from "./NotFoundPage.tsx";

const Main = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path={`${navItems[0].path}`} element={<Home/>}/>
      {[`${navItems[1].path}`, `${navItems[1].path}/:shortName`].map(path => <Route key={path} path={path} element={<AboutMe/>}/>)}
      <Route path={`${navItems[2].path}`} element={<StarWars/>}/>
      <Route path={`${navItems[3].path}`} element={<Contact/>}/>
      <Route path={`*`} element={<NotFoundPage/>}/>
    </Routes>
  )
};

export default Main;