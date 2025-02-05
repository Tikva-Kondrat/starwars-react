// @ts-expect-error TS(6142): Module './walker/Hero.jsx' was resolved to 'C:/jav... Remove this comment to see the full error message
import Hero from "./walker/Hero.jsx";
// @ts-expect-error TS(6142): Module './TeamSection.jsx' was resolved to 'C:/jav... Remove this comment to see the full error message
import TeamSection from "./TeamSection.jsx";
// @ts-expect-error TS(6142): Module './Description.jsx' was resolved to 'C:/jav... Remove this comment to see the full error message
import Description from "./Description.jsx";

const Home = () => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <main className="">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Hero/>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TeamSection/>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Description/>
        </main>
    );
};

export default Home;