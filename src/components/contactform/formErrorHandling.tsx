import {
  nameValidationWrongFormatMsg,
  nameValidationWrongLengthMsg,
  validationRequiredFieldMsg
} from "../../utils/constatns.ts";
import {FieldErrors} from "react-hook-form";

export function handleNameInputErrors<K extends keyof FieldErrors<FormData>>(
  inputName: K,
  errors: FieldErrors<FormData>
) {
  let errorMsg
  const inputError = errors[inputName]
  if (!inputError) return (<></>)
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