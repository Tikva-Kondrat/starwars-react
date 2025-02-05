import {starWarsInfo} from "../utils/constatns.js";

const StarWars = () => {
    return (
        <div className="context__text">
            {starWarsInfo}
        </div>
    );
};

export default StarWars;