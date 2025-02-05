
import Header from "./components/Header.jsx";

import Main from "./components/Main.jsx";

import Footer from "./components/Footer.jsx"
import {useState} from "react";
import {navItems} from "./utils/constatns.js";

function App() {
    const [page, setPage] = useState(navItems[0]);
    return (

        <div className="container-fluid">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Header changePage={setPage} />
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Main page={page}/>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Footer/>
        </div>
    )
}

export default App
