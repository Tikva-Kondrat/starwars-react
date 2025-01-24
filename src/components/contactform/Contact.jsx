import PlanetSelector from "./PlanetSelector.jsx";
import './Contact.css'
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
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* first name*/}
            <label htmlFor="fname">First Name</label>
            <input
                type="text"
                name="firstName"
                {...register("firstName",
                    nameInputRequirements)}
                placeholder="Your name.."/>
            {handleNameInputErrors('firstName', errors)}

            {/* last name*/}
            <label htmlFor="lname">Last Name</label>
            <input
                type="text"
                name="lastName"
                {...register("lastName",
                    nameInputRequirements)}
                placeholder="Your last name.."/>
            {handleNameInputErrors('lastName', errors)}

            {/* planet*/}
            <label htmlFor="planet">Planet</label>
            <PlanetSelector
                {...register("planet")}
            />

            {/*example from sandbox
            // todo: delete this sample code
            */}
            <label>Select Department of Interest</label>
            <Controller
                name="department"
                control={control}
                render={({field}) => (
                    <Select {...field} isMulti = {false} options={departments}/>
                )}
            />
            <input type="submit" value="Submit"/>
        </form>
    );
};

export default Contact;