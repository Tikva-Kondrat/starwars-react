import Gender from "../utilComponents/Gender.tsx";
import {noInfoMessage} from "../../utils/constatns.ts";
import * as React from "react";

interface WalkerInfoProps {
    info: {
        name: string;
        gender: string;
        hair_color: string;
        eye_color: string;
        height: string;
        mass: string;
    }
}

const WalkerInfo:React.FC<WalkerInfoProps> = ({info}) => {
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