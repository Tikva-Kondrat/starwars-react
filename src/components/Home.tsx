import Hero from "./walker/Hero.tsx";
import TeamSection from "./TeamSection.tsx";
import Description from "./Description.tsx";

const Home = () => {
    return (
        <main className="">
            <Hero/>
            <TeamSection/>
            <Description/>
        </main>
    );
};

export default Home;