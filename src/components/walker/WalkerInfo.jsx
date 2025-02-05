import Gender from "../utilComponents/Gender.jsx";
import {noInfoMessage} from "../../utils/constatns.js";

const WalkerInfo = ({info}) => {
    const {name, gender, hair_color, eye_color, height, mass} = info
    return (
        name
            ? <div className="context__text">
                <div> {`Name: ${name}`}</div>
                <Gender gender={gender}/>
                <div> {`Height: ${height}`} </div>
                <div> {`Mass: ${mass}`}</div>
                <div>{`Eyes' color: ${eye_color}`}</div>
                <div>{`Hair color: ${hair_color}`}</div>
            </div>
            : <div className="context__text">{noInfoMessage}</div>
    );
};

export default WalkerInfo;