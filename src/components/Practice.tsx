import { useForm } from "react-hook-form";

const Practice = () => {
  type FormValues = {
    firstName: string;
    lastName: string;
  };
  const form = useForm<FormValues>();
  const { register, handleSubmit, watch } = form;
  const enableLastNameField = watch("firstName")
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };
  return (
    <div>
      <form className="somesome" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">First Name</label>
          <input type="text" {...register("firstName")} />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" {...register("lastName")} disabled={!enableLastNameField}/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Practice;
