import {
    nameValidationWrongFormatMsg,
    nameValidationWrongLengthMsg,
    validationRequiredFieldMsg
} from "../../utils/constatns.js";

export const handleNameInputErrors = (inputName: any, errors: any) => {
    let errorMsg
    const inputError = errors[inputName]
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    if (!inputError) return (<></>)
    switch (inputError.type) {
        case 'required': errorMsg = validationRequiredFieldMsg; break;
        case 'pattern': errorMsg = nameValidationWrongFormatMsg; break;
        case 'minLength': errorMsg = nameValidationWrongLengthMsg; break;
        default: errorMsg = '';
    }
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    if (!errorMsg) return (<></>) // no error to show
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    return (<p className={"errorMsg error-text"}>{errorMsg}</p>)
}