import {frields} from "../utils/constatns.js";
import Friend from "./Friend.jsx";

const TeamSection = () => {
    return (
        <section className="float-right border border-base-color rounded-b-2xl w-1/2 grid grid-cols-3 gap-1">
            <h2 className="col-span-3 text-center">Dream team</h2>
            { frields.map((imgSrc, index) =>
                < Friend
                    key={`Friend-${index}`}
                    imgSrc={imgSrc} pos = {index + 1} /> ) }
        </section>
    );
};

export default TeamSection;