import {useEffect, useState} from "react";
import {makeServerRequest, requestPlanets} from "../../api/apiRequests.js";

// todo: add controller from react-select
const PlanetSelector = () => {
    const [planets, setPlanets] = useState(['Earth'])

    useEffect(() => {
            makeServerRequest(
                requestPlanets,
                (planetList: any) => // create new list of planets' names from server response
                setPlanets(planetList.map((planet: any) => planet.name)),
                // in case of error we stay on Earth
                () => setPlanets(['Earth'])
            ).then()},
        [])

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <select id="planet" name="planet" className={"w-full bg- my-1 py-2 px-3 border border-base-color rounded-2xl"} >
            {planets.map((planet, index) =>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <option className={"bg-black"} key={`planet${index}`}>{planet}</option>)}
        </select>
    );
};

export default PlanetSelector;