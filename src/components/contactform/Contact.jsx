import PlanetSelector from "./PlanetSelector.jsx";
import {Controller, useForm} from "react-hook-form";
import {nameInputRequirements} from "../../utils/constatns.js";
import Select from "react-select";
import {handleNameInputErrors} from "./formErrorHandling.jsx";


const Contact = () => {
    const {
        register,
        control,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
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
        <div className={"flex w-full flex-wrap justify-center items-center my-4 mb-96"}>


        <form onSubmit={handleSubmit(onSubmit)} className={"flex w-72 flex-col flex-wrap justify-center mb-8 "}>
            {/* first name*/}
            <label htmlFor="fname" className={"text-center text-xl font-semibold my-2"}>First Name</label>
            <input className={"w-full py-2 px-3 my-1 border border-base-color rounded-2xl"}
                type="text"
                name="firstName"
                {...register("firstName",
                    nameInputRequirements)}
                placeholder="Your name.."/>
            {handleNameInputErrors('firstName', errors)}

            {/* last name*/}
            <label className={"text-center text-xl font-semibold my-2"} htmlFor="lname">Last Name</label>
            <input className={"w-full py-2 px-3 my-1 border border-base-color rounded-2xl"}
                type="text"
                name="lastName"
                {...register("lastName",
                    nameInputRequirements)}
                placeholder="Your last name.."/>
            {handleNameInputErrors('lastName', errors)}

            {/* planet*/}
            <label className={"text-center text-xl font-semibold my-2"} htmlFor="planet" >Planet</label>
            <PlanetSelector
                {...register("planet")}
            />

            {/*example from sandbox
            // todo: delete this sample code
            */}
            <label className={"text-center text-xl font-semibold my-2"}>Select Department of Interest</label>
            <Controller
                name="department"
                control={control}
                render={({field}) => (
                    <Select {...field} isMulti = {false}  options={departments} className={"w-full bg-black bg-black my-1 py-2 px-3 border border-base-color rounded-2xl"}/>
                )}
            />
            <input className={"w-full text-xl hover:bg-grean-salat-color my-2 bg-buttom-sub cursor-pointer py-2 px-3 rounded-2xl text-white"} type="submit" value="Submit"/>
        </form>
        </div>
    );
};

export default Contact;