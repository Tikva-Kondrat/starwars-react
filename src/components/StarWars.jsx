import {starWarsInfo} from "../utils/constatns.ts";

const StarWars = () => {
    return (
        <div className="context__text">
            {starWarsInfo}
        </div>
    );
};

export default StarWars;