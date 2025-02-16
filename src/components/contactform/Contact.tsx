import PlanetSelector from "./PlanetSelector.tsx";
import {useForm} from "react-hook-form";
import {nameInputRequirements} from "../../utils/constatns.ts";
import {handleNameInputErrors} from "./formErrorHandling.tsx";
import PageWrapper from "../ui/PageWrapper.tsx";

interface FormData {
  firstName: string;
  lastName: string;
  planet: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();

  const onSubmit = (data: FormData): void => {
    console.log(data);
  }

  return (
    <div className={"flex w-full flex-wrap justify-center items-center my-4 mb-96"}>

      <form onSubmit={handleSubmit(onSubmit)} className={"flex w-72 flex-col flex-wrap justify-center mb-8 "}>
        {/* first name*/}
        <label htmlFor="fname" className={"text-center text-xl font-semibold my-2"}>First Name</label>
        <input className={"w-full py-2 px-3 my-1 border border-base-color rounded-2xl"}
               type="text"
               {...register("firstName",
                 nameInputRequirements)}
               placeholder="Your name.."/>
        {handleNameInputErrors(errors.firstName)}

        {/* last name*/}
        <label className={"text-center text-xl font-semibold my-2"} htmlFor="lname">Last Name</label>
        <input className={"w-full py-2 px-3 my-1 border border-base-color rounded-2xl"}
               type="text"
               {...register("lastName",
                 nameInputRequirements)}
               placeholder="Your last name.."/>
        {handleNameInputErrors(errors.lastName)}

        {/* planet*/}
        <label className={"text-center text-xl font-semibold my-2"} htmlFor="planet">Planet</label>
        <PlanetSelector
          register={register}
        />
        <input
          className={"w-full text-xl hover:bg-grean-salat-color my-2 bg-buttom-sub cursor-pointer py-2 px-3 rounded-2xl text-white"}
          type="submit" value="Submit"/>
      </form>
    </div>
  );
};

export default PageWrapper(Contact);