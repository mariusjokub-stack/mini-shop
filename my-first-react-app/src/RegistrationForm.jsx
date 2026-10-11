
/*
import { useForm } from "react-hook-form";

function RegistrationForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Vardas:</label>
        <input {...register("vardas")} />
      </div>

      <div>
        <label>Pavardė:</label>
        <input {...register("pavarde")} />
      </div>

      <div>
        <label>El. paštas:</label>
        <input type="email" {...register("email")} />
      </div>

      <div>
        <label>Slaptažodis:</label>
        <input type="password" {...register("slaptazodis")} />
      </div>

      <button type="submit">Registruotis</button>
    </form>
  );
}

export default RegistrationForm;

*/

/*
import { useForm } from "react-hook-form";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Vardas:</label>
        <input
          {...register("vardas", {
            required: "Vardas yra privalomas",
          })}
        />

        {errors.vardas && <p>{errors.vardas.message}</p>}
      </div>

      <div>
        <label>Pavardė:</label>
        <input
          {...register("pavarde", {
            required: "Pavardė yra privaloma",
          })}
        />

        {errors.pavarde && <p>{errors.pavarde.message}</p>}
      </div>

      <div>
        <label>El. paštas:</label>
        <input
          type="email"
          {...register("email", {
            required: "El. paštas yra privalomas",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Neteisingas el. pašto formatas",
            },
          })}
        />

        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Slaptažodis:</label>
        <input
          type="password"
          {...register("slaptazodis", {
            required: "Slaptažodis yra privalomas",
            minLength: {
              value: 8,
              message: "Slaptažodį turi sudaryti bent 8 simboliai",
            },
          })}
        />

        {errors.slaptazodis && <p>{errors.slaptazodis.message}</p>}
      </div>

      <button type="submit">Registruotis</button>
    </form>
  );
}

export default RegistrationForm;

*/



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