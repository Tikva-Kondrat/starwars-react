import {frields} from "../utils/constatns.js";

import Friend from "./Friend.jsx";

const TeamSection = () => {
    return (

        <section className="float-right border border-base-color rounded-b-2xl w-1/2 grid grid-cols-3 gap-1">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <h2 className="col-span-3 text-center">Dream team</h2>
            { frields.map((imgSrc, index) =>
                < Friend
                    key={`Friend-${index}`}
                    imgSrc={imgSrc} pos = {index + 1} /> ) }
        </section>
    );
};

export default TeamSection;