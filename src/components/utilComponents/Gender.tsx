import {IoIosMan, IoIosWoman} from "react-icons/io";

const Gender = ({gender}) => {
    return (
        <div>
            Gender:
            {gender.toLowerCase() === 'male' ? <IoIosMan/> : <IoIosWoman/>}
        </div>
    );
};

export default Gender;