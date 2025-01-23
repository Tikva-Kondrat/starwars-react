import Gender from "../utilComponents/Gender.jsx";

const WalkerInfo = ({info}) => {
    const {name, gender, hair_color, eye_color, height, mass} = info
    return (
        <div className="farGalaxy">
            <div> {`Name: ${name}`}</div>
            <Gender gender={gender}/>
            <div> {`Height: ${height}`} </div>
            <div> {`Mass: ${mass}`}</div>
            <div>{`Eyes' color: ${eye_color}`}</div>
            <div>{`Hair color: ${hair_color}`}</div>
        </div>
    );
};

export default WalkerInfo;