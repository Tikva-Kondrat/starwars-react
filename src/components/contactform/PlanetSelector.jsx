import {useEffect, useState} from "react";
import {makeServerRequest, requestPlanets} from "../../api/apiRequests.js";

// todo: add controller from react-select
const PlanetSelector = () => {
    const [planets, setPlanets] = useState(['Earth'])

    useEffect(() => {
            makeServerRequest(
                requestPlanets,
                (planetList) =>
                    // create new list of planets' names from server response
                    setPlanets(planetList.map(planet => planet.name)),
                // in case of error we stay on Earth
                () => setPlanets(['Earth'])
            ).then()},
        [])

    return (
        <select id="planet" name="planet">
            {planets.map((planet, index) =>
                <option key={`planet${index}`}>{planet}</option>)}
        </select>
    );
};

export default PlanetSelector;