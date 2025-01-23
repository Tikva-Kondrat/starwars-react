import Hero from "./walker/Hero.jsx";
import TeamSection from "./TeamSection.jsx";
import Description from "./Description.jsx";

const Home = () => {
    return (
        <main className="clearfix">
            <Hero/>
            <TeamSection/>
            <Description/>
        </main>
    );
};

export default Home;