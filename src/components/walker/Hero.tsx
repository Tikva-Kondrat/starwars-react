import mainCharacter from '../../assets/images-jpg/friend0.jpg'

const Hero = () => {
    return (
        <section className={'float-left w-1/4 mr-2'}>
            <img className={'w-full shadow-hero'} src={mainCharacter} alt="Hero"/>
        </section>
    );
};

export default Hero;