import {starWarsInfo} from "../utils/constatns.js";

const StarWars = () => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="context__text">
            {starWarsInfo}
        </div>
    );
};

export default StarWars;