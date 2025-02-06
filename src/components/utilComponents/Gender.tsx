import {IoIosMan, IoIosWoman} from "react-icons/io";
import * as React from "react";

interface  GenderType {
    gender: string,
}

const Gender:React.FC<GenderType> = ({gender} ) => {
    return (
        <div>
            Gender:
            {gender.toLowerCase() === 'male' ? <IoIosMan/> : <IoIosWoman/>}
        </div>
    );
};

export default Gender;