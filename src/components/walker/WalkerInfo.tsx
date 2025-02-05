// @ts-expect-error TS(6142): Module '../utilComponents/Gender.jsx' was resolved... Remove this comment to see the full error message
import Gender from "../utilComponents/Gender.jsx";
import {noInfoMessage} from "../../utils/constatns.js";

const WalkerInfo = ({
    info
}: any) => {
    const {name, gender, hair_color, eye_color, height, mass} = info
    return (
        name
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            ? <div className="context__text">
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div> {`Name: ${name}`}</div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Gender gender={gender}/>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div> {`Height: ${height}`} </div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div> {`Mass: ${mass}`}</div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div>{`Eyes' color: ${eye_color}`}</div>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <div>{`Hair color: ${hair_color}`}</div>
            </div>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            : <div className="context__text">{noInfoMessage}</div>
    );
};

export default WalkerInfo;