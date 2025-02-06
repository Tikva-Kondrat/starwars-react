import {IoIosMan, IoIosWoman} from "react-icons/io";

type  Props = {
    gender: string,
}

const Gender = ({gender}: Props ) => {
    return (
        <div>
            Gender:
            {gender.toLowerCase() === 'male' ? <IoIosMan/> : <IoIosWoman/>}
        </div>
    );
};

export default Gender;