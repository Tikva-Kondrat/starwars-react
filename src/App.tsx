import Header from "./components/Header.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx"
import {useState} from "react";
import {navItems} from "./utils/constatns.ts";

function App() {
  const [page, setPage] = useState<string>(navItems[0]);
  return (
    <div className="container-fluid">
      <Header changePage={setPage}/>
      <Main page={page}/>
      <Footer/>
    </div>
  )
}

export default App
