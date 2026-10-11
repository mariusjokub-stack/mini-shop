import { useForm } from "react-hook-form";

function StudentForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>Studento forma</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Vardas */}
        <div>
          <label>Vardas:</label>
          <input {...register("vardas")} />
        </div>

        {/* Grupė */}
        <div>
          <label>Grupė:</label>

          <select {...register("grupe")}>
            <option value="">Pasirinkite grupę</option>
            <option value="JS1">JS1</option>
            <option value="JS2">JS2</option>
            <option value="JS3">JS3</option>
          </select>
        </div>

        {/* Studijų programa */}
        <div>
          <label>Studijų programa:</label>

          <select {...register("programa")}>
            <option value="">Pasirinkite programą</option>
            <option value="Fullstack JavaScript">
              Fullstack JavaScript
            </option>
            <option value="Python">Python</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>
        </div>

        {/* Studijų forma */}
        <div>
          <p>Studijų forma:</p>

          <label>
            <input
              type="radio"
              value="Nuolatinės"
              {...register("studijuForma")}
            />
            Nuolatinės
          </label>

          <label>
            <input
              type="radio"
              value="Ištęstinės"
              {...register("studijuForma")}
            />
            Ištęstinės
          </label>
        </div>

        {/* Programavimo kalbos */}
        <div>
          <p>Mėgstamos programavimo kalbos:</p>

          <label>
            <input
              type="checkbox"
              value="JavaScript"
              {...register("kalbos")}
            />
            JavaScript
          </label>

          <label>
            <input
              type="checkbox"
              value="Python"
              {...register("kalbos")}
            />
            Python
          </label>

          <label>
            <input
              type="checkbox"
              value="C++"
              {...register("kalbos")}
            />
            C++
          </label>

          <label>
            <input
              type="checkbox"
              value="Java"
              {...register("kalbos")}
            />
            Java
          </label>
        </div>

        <button type="submit">Pateikti</button>
      </form>
    </div>
  );
}

export default StudentForm;