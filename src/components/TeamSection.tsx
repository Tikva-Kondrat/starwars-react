import {friends} from "../utils/constatns.ts";
import Friend from "./Friend.tsx";

const TeamSection = () => {
    return (
        <section className="float-right border border-base-color rounded-b-2xl w-1/2 grid grid-cols-3 gap-1">
            <h2 className="col-span-3 text-center">Dream team</h2>
            { friends.map((imgSrc:string, index:number) =>
                < Friend
                    key={`Friend-${index}`}
                    imgSrc={imgSrc} pos = {index + 1} /> ) }
        </section>
    );
};

export default TeamSection;