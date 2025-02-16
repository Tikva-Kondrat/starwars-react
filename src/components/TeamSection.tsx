import Friend from "./Friend.tsx";
import {useContext} from "react";
import {SWContext} from "../shared_data/context.ts";
import {characters} from "../api/constants.ts";

const TeamSection = () => {
  const {hero} = useContext(SWContext);
  const friends = [...characters]
      .filter(f => f[0] !== hero)

  console.log(friends)

  return (
    <section className="float-right border border-base-color rounded-b-2xl w-1/2 grid grid-cols-3 gap-1">
      <h2 className="col-span-3 text-center">Dream team</h2>
      {friends.map((f, i) =>
        < Friend
          key={f[0]}
          imgSrc={f[1].img} pos={i + 1}/>)}
    </section>
  );
};

export default TeamSection;