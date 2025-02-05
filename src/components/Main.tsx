// @ts-expect-error TS(6142): Module './Home.jsx' was resolved to 'C:/java_59/hw... Remove this comment to see the full error message
import Home from "./Home.jsx";
import {navItems} from "../utils/constatns.js";
// @ts-expect-error TS(6142): Module './AboutMe.jsx' was resolved to 'C:/java_59... Remove this comment to see the full error message
import AboutMe from "./AboutMe.jsx";
// @ts-expect-error TS(6142): Module './StarWars.jsx' was resolved to 'C:/java_5... Remove this comment to see the full error message
import StarWars from "./StarWars.jsx";
// @ts-expect-error TS(6142): Module './contactform/Contact.jsx' was resolved to... Remove this comment to see the full error message
import Contact from "./contactform/Contact.jsx";

const Main = ({
    page
}: any) => {
        switch (page) {
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            case navItems[1]: return <AboutMe />;
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            case navItems[2]: return <StarWars />;
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            case navItems[3]: return <Contact />;
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            default: return <Home />;
        }
};

export default Main;