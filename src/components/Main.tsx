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
      {[`${navItems[0].path}`, `${navItems[0].path}/:shortName`].map(path => <Route key={path} path={path}
                                                                                 element={<Home/>}/>)}
      {[`${navItems[1].path}`, `${navItems[1].path}/:shortName`].map(path => <Route key={path} path={path}
                                                                                 element={<AboutMe/>}/>)}
      {[`${navItems[2].path}`, `${navItems[2].path}/:shortName`].map(path => <Route key={path} path={path}
                                                                                 element={<StarWars/>}/>)}
      {[`${navItems[3].path}`, `${navItems[3].path}/:shortName`].map(path => <Route key={path} path={path}
                                                                                 element={<Contact/>}/>)}
      <Route path={`*`} element={<NotFoundPage/>}/>
    </Routes>
  )
};

export default Main;