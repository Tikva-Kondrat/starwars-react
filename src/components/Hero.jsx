import mainCharacter from '../assets/images-jpg/main.jpg'

const Hero = () => {
    return (
        <section className="float-start w-25 me-3">
            <img className="w-100" src={mainCharacter} alt="Hero"/>
        </section>
    );
};

export default Hero;