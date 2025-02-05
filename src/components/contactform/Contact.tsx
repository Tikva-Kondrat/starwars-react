// @ts-expect-error TS(6142): Module './PlanetSelector.jsx' was resolved to 'C:/... Remove this comment to see the full error message
import PlanetSelector from "./PlanetSelector.jsx";
import {Controller, useForm} from "react-hook-form";
import {nameInputRequirements} from "../../utils/constatns.js";
import Select from "react-select";
// @ts-expect-error TS(6142): Module './formErrorHandling.jsx' was resolved to '... Remove this comment to see the full error message
import {handleNameInputErrors} from "./formErrorHandling.jsx";


const Contact = () => {
    const {
        register,
        control,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    }

    // todo: delete this sample code
    const departments = [
        { value: "Computer-Science", label: "Computer Science" },
        { value: "Physics", label: "Physics" },
        { value: "Chemistry", label: "Chemistry" },
        { value: "Mathematics", label: "Mathematics" }
    ];

    return (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className={"flex w-full flex-wrap justify-center items-center my-4 mb-96"}>


        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <form onSubmit={handleSubmit(onSubmit)} className={"flex w-72 flex-col flex-wrap justify-center mb-8 "}>
            {/* first name*/}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <label htmlFor="fname" className={"text-center text-xl font-semibold my-2"}>First Name</label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <input className={"w-full py-2 px-3 my-1 border border-base-color rounded-2xl"}
                type="text"
                // @ts-expect-error TS(2783): 'name' is specified more than once, so this usage ... Remove this comment to see the full error message
                name="firstName"
                {...register("firstName",
                    nameInputRequirements)}
                placeholder="Your name.."/>
            {handleNameInputErrors('firstName', errors)}

            {/* last name*/}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <label className={"text-center text-xl font-semibold my-2"} htmlFor="lname">Last Name</label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <input className={"w-full py-2 px-3 my-1 border border-base-color rounded-2xl"}
                type="text"
                // @ts-expect-error TS(2783): 'name' is specified more than once, so this usage ... Remove this comment to see the full error message
                name="lastName"
                {...register("lastName",
                    nameInputRequirements)}
                placeholder="Your last name.."/>
            {handleNameInputErrors('lastName', errors)}

            {/* planet*/}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <label className={"text-center text-xl font-semibold my-2"} htmlFor="planet" >Planet</label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <PlanetSelector
                {...register("planet")}
            />

            {/*example from sandbox
            // todo: delete this sample code
            */}
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <label className={"text-center text-xl font-semibold my-2"}>Select Department of Interest</label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Controller
                name="department"
                control={control}
                render={({field}) => (
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <Select {...field} isMulti = {false}  options={departments} className={"w-full bg-black bg-black my-1 py-2 px-3 border border-base-color rounded-2xl"}/>
                )}
            />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <input className={"w-full text-xl hover:bg-grean-salat-color my-2 bg-buttom-sub cursor-pointer py-2 px-3 rounded-2xl text-white"} type="submit" value="Submit"/>
        </form>
        </div>
    );
};

export default Contact;