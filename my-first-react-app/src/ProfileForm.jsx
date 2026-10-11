import { useForm } from "react-hook-form";

function ProfileForm() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      vardas: "Marius",
      pavarde: "Jokubauskas",
      email: "marius@gmail.com",
      miestas: "Kaunas",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Profilio redagavimas</h2>

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
          <label>Miestas:</label>
          <input {...register("miestas")} />
        </div>

        <button type="submit">Išsaugoti</button>

        <button type="button" onClick={() => reset()}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;