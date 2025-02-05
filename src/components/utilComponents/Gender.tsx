import {IoIosMan, IoIosWoman} from "react-icons/io";

const Gender = ({
    gender
}: any) => {
    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            Gender:
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {gender.toLowerCase() === 'male' ? <IoIosMan/> : <IoIosWoman/>}
        </div>
    );
};

export default Gender;