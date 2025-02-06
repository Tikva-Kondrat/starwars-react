import {
    nameValidationWrongFormatMsg,
    nameValidationWrongLengthMsg,
    validationRequiredFieldMsg
} from "../../utils/constatns.ts";
import {FieldErrors} from "react-hook-form";

export const handleNameInputErrors = (inputName: "firstName" | "lastName", errors?: FieldErrors<any>) => {
    if (!errors || !errors[inputName]) return null;

    const inputError = errors[inputName]!;
    let errorMsg: string = "";

    switch (inputError.type) {
        case 'required': errorMsg = validationRequiredFieldMsg; break;
        case 'pattern': errorMsg = nameValidationWrongFormatMsg; break;
        case 'minLength': errorMsg = nameValidationWrongLengthMsg; break;
        default: errorMsg = '';
    }
    if (!errorMsg) return (<></>) // no error to show
    return (<p className={"errorMsg error-text"}>{errorMsg}</p>)
}