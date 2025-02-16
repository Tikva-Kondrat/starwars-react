import {useContext} from "react";
import {SWContext} from "../../shared_data/context.ts";
import {characters} from "../../api/constants.ts";

const Hero = () => {
  const {hero} = useContext(SWContext);
    return (
        <section className={'float-left w-1/4 mr-2'}>
            <img className={'w-full shadow-hero'} src={characters.get(hero)!.img} alt="Hero"/>
        </section>
    );
};

export default Hero;