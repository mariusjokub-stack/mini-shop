import useInput from "./useInput";


function Register() {

  const {
    value,
    onChange,
    clear
  } = useInput();


  return (
    <div>

      <h2>Registracija</h2>

      <input
        value={value}
        onChange={onChange}
        placeholder="Vardas"
      />


      <button onClick={clear}>
        Išvalyti
      </button>


      <p>
        Tavo vardas: {value}
      </p>

    </div>
  );
}


export default Register;