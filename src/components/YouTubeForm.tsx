import { DevTool } from "@hookform/devtools";
import { useForm, useFieldArray } from "react-hook-form";
export const YouTubeForm = () => {
  type FormValues = {
    username: string;
    email: string;
    channel: string;
    social: {
      twitter: string;
      facebook: string;
    };
    phoneNumbers: string[];
    phNumbers: { number: string }[];
    age: number;
    dob: Date;
  };

  const defaultValues = {
    username: "Ram",
    email: "ram@ramayana.com",
    channel: "Jay Shree Ram",
    social: {
      twitter: "ram",
      facebook: "ram",
    },
    phoneNumbers: ["984", "489"],
    phNumbers: [{ number: "123" }],
    age: 20,
    dob: new Date(),
  };
  const form = useForm<FormValues>({ defaultValues });

  const { register, control, handleSubmit, formState, watch } = form;

  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data);
  };

  const watchUsername = watch("username");

  return (
    <div>
      <h2>{JSON.stringify(watchUsername)}</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* //=====================USERNAME================== */}
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", { required: "Username is required" })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>
        {/* //==========================EMAIL================ */}
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register(
              "email"
              // {
              //   required: "Email is required",
              //   pattern: {
              //     value:
              //       /^ [a-zA-Z0-9. !#$%&'*+/=?^_`{|}~~] +@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/,
              //     message: "Invalid email format",
              //   },
              // }
            )}
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        {/* //======================CHANNEL================= */}
        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: { value: true, message: "Channel is required" },
            })}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>
        {/* //=========================TWITTER====================== */}
        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <input type="text" id="twitter" {...register("social.twitter")} />
        </div>
        {/* //===========================FACEBOOK===================== */}
        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebook" {...register("social.facebook")} />
        </div>
        {/* ============================PRIMARY PHONE NUMBER================= */}
        <div className="form-control">
          <label htmlFor="primary-phone">Primary Phone Number</label>
          <input
            type="text"
            id="primary-phone"
            {...register("phoneNumbers.0")}
          />
        </div>
        {/* =======================SECONDARY PHONE NUMBER==================== */}
        <div className="form-control">
          <label htmlFor="secondary-phone">Secondary Phone Number</label>
          <input
            type="text"
            id="secondary-phone"
            {...register("phoneNumbers.1")}
          />
        </div>
        {/* ======================LIST OF PHONE NUMBERS==================== */}
        <div>
          <label htmlFor="">List of phone numbers</label>
          <div>
            {fields.map((field, index) => (
              <div className="form-control" key={field.id}>
                <input
                  type="text"
                  {...register(`phNumbers.${index}.number` as const)}
                />
                {index > 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={() => append({ number: "" })}>
              Add Phone Number
            </button>
          </div>
        </div>
        {/* =======================AGE=========================== */}
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            {...register("age", {
              valueAsNumber: true,
              required: { value: true, message: "Age is required" },
            })}
          />
          <p className="error">{errors.age?.message}</p>
        </div>
        {/* ==========================DOB========================== */}
        <div className="form-control">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            {...register("dob", {
              valueAsDate: true,
              required: { value: true, message: "Date of Birth is required" },
            })}
          />
          <p className="error">{errors.dob?.message}</p>
        </div>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
``;
