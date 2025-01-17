import {frields} from "../utils/constatns.js";
import Friend from "./Friend.jsx";

const TeamSection = () => {
    return (
        <section className="float-end w-50 row border rounded-bottom-4 ms-2 me-0">
            <h2 className="col-12 text-center">Dream team</h2>
            { frields.map((imgSrc, index) =>
                // eslint-disable-next-line react/jsx-key
                < Friend imgSrc={imgSrc} pos = {index + 1} /> ) }
        </section>
    );
};

export default TeamSection;