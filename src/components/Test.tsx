import { useForm } from "react-hook-form";

export const Test = () => {
  type FormValue = {
    username: string;
    email: string;
    channel: string;
  };
  const form = useForm<FormValue>();
  const { register, handleSubmit } = form;
  const onSubmit = (data: FormValue) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register("email")} />
        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />
        <button>Submit</button>
      </form>
    </div>
  );
};
