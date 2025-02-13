import {useEffect, useState} from "react";
import {makeServerRequest, requestPlanets} from "../../api/apiRequests.ts";
import {UseFormRegister} from "react-hook-form";
import Select from "react-select/base";
interface Planet {
    name: string;
}

type Props = {
   register: UseFormRegister<Select>
}
const PlanetSelector = ({register}: Props) => {
    const [planets, setPlanets] = useState<string[]>(['Earth'])

    useEffect(() => {
            makeServerRequest(
                requestPlanets(),
                (planetList:Planet[]):void =>
                    // create new list of planets' names from server response
                    setPlanets(planetList.map(planet => planet.name)),
                // in case of error we stay on Earth
                () => setPlanets(['Earth'])
            ).then()},
        [])

    return (
        <select {...register("planet")} id="planet" name="planet" className={"w-full bg- my-1 py-2 px-3 border border-base-color rounded-2xl"} >
            {planets.map((planet, index) =>
                <option className={"bg-black"} key={`planet${index}`}>{planet}</option>)}
        </select>
    );
};

export default PlanetSelector;