import Gender from "../utilComponents/Gender.tsx";
import {noInfoMessage} from "../../utils/constatns.ts";
import {CharacterDetails} from "../../types/types.t.ts";

const CharacterInfo = ({info}: {info: CharacterDetails}) => {
  const {name, gender, hair_color, eye_color, height, mass} = info
  return (
    name
      ? <div className="context__text">
        <div> {`Name: ${name}`}</div>
        <Gender gender={gender as string}/>
        <div> {`Height: ${height}`} </div>
        <div> {`Mass: ${mass}`}</div>
        <div>{`Eyes' color: ${eye_color}`}</div>
        <div>{`Hair color: ${hair_color}`}</div>
      </div>
      : <div className="context__text">{noInfoMessage}</div>
  );
};

export default CharacterInfo;