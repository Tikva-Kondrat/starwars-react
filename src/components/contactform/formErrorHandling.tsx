import {
  nameValidationWrongFormatMsg,
  nameValidationWrongLengthMsg,
  validationRequiredFieldMsg
} from "../../utils/constatns.ts";
import {FieldError} from "react-hook-form";

export const handleNameInputErrors = (inputError?: FieldError) =>  {
    if (!inputError) return (<></>)
    let errorMsg
    switch (inputError.type) {
        case 'required':
            errorMsg = validationRequiredFieldMsg;
            break;
        case 'pattern':
            errorMsg = nameValidationWrongFormatMsg;
            break;
        case 'minLength':
            errorMsg = nameValidationWrongLengthMsg;
            break;
        default:
            errorMsg = '';
    }
    if (!errorMsg) return (<></>) // no error to show
  return (<p className={"errorMsg error-text"}>{errorMsg}</p>)
}