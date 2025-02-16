import {starWarsInfo} from "../utils/constatns.ts";
import PageWrapper from "./ui/PageWrapper.tsx";

const StarWars = () => {
    return (
        <div className="context__text">
            {starWarsInfo}
        </div>
    );
};

export default PageWrapper(StarWars);