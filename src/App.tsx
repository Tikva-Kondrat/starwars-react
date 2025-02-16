import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx"
import {ErrorContext, SWContext} from "./shared_data/context.ts";
import {useState} from "react";
import {defaultCharacterShortName} from "./storage/constants.ts";

function App() {
  const [hero, setHero] = useState(defaultCharacterShortName);
  const [isWrongRoute, setIsWrongRoute] = useState(false);
  return (
    <SWContext.Provider value={
      {hero, changeHero: setHero}}>
      <div className="container-fluid">
        <ErrorContext.Provider value={
          {isWrongRoute, setIsWrongRoute}}>
          <Header/>
          <Main/>
          <Footer/>
        </ErrorContext.Provider>
      </div>
    </SWContext.Provider>
  )
}

export default App
