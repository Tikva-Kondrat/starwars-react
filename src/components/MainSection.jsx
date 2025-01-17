import Hero from './Hero.jsx';
import TeamSection from "./TeamSection.jsx";
import Description from "./Description.jsx";

const MainSection = () => {
    return (
        <main className="clearfix">
            <Hero/>
            <TeamSection/>
            <Description />
        </main>
    );
};

export default MainSection;