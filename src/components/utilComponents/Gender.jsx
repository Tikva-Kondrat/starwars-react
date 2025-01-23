import {IoIosMan, IoIosWoman} from "react-icons/io";
// todo: sometimes I get underfined value. Don't understand why
const Gender = ({gender = 'male'}) => {
    return (
        <div>
            Gender:
            {gender.toLowerCase() === 'male' ? <IoIosMan/> : <IoIosWoman/>}
        </div>
    );
};

export default Gender;