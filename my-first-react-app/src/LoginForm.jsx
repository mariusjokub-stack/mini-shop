import { useState } from "react";
import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = (data) => {
    setMessage(`Sveiki, ${data.email}!`);
  };

  return (
    <div>
      <h2>Prisijungimas</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>El. paštas:</label>

          <input
            type="email"
            {...register("email", {
              required: "El. paštas yra privalomas",
            })}
          />

          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Slaptažodis:</label>

          <input
            type="password"
            {...register("password", {
              required: "Slaptažodis yra privalomas",
            })}
          />

          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit">Prisijungti</button>
      </form>

      {message && <h3>{message}</h3>}
    </div>
  );
}

export default LoginForm;