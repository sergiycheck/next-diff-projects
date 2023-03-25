import { useForm } from "react-hook-form";

export type LoginFormData = {
  email: string;
  password: string;
};

export function Login({
  submitFormData,
}: {
  submitFormData: (data: LoginFormData) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = handleSubmit((data) => submitFormData(data));

  return (
    <form onSubmit={onSubmit}>
      <label>Email</label>
      <input {...register("email")} />
      <label>Password</label>
      <input {...register("password")} />
      <button type="submit">Submit</button>
    </form>
  );
}
