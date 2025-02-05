// @ts-expect-error TS(2307): Cannot find module '../../assets/images-jpg/main.j... Remove this comment to see the full error message
import mainCharacter from '../../assets/images-jpg/main.jpg'

const Hero = () => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <section className={'float-left w-1/4 mr-2'}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <img className={'w-full shadow-hero'} src={mainCharacter} alt="Hero"/>
        </section>
    );
};

export default Hero;