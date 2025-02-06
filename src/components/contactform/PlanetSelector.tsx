import {useEffect, useState} from "react";
import {makeServerRequest, requestPlanets} from "../../api/apiRequests.js";
interface Planet {
    name: string;
}
// todo: add controller from react-select
const PlanetSelector = () => {
    const [planets, setPlanets] = useState<string[]>(['Earth'])

    useEffect(() => {
            makeServerRequest(
                requestPlanets,
                (planetList:Planet[]):void =>
                    // create new list of planets' names from server response
                    setPlanets(planetList.map(planet => planet.name)),
                // in case of error we stay on Earth
                () => setPlanets(['Earth'])
            ).then()},
        [])

    return (
        <select id="planet" name="planet" className={"w-full bg- my-1 py-2 px-3 border border-base-color rounded-2xl"} >
            {planets.map((planet, index) =>
                <option className={"bg-black"} key={`planet${index}`}>{planet}</option>)}
        </select>
    );
};

export default PlanetSelector;