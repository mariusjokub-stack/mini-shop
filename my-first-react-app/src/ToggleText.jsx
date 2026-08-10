import useToggle from "./useToggle";


function ToggleText() {

  const { value, toggle } = useToggle();


  return (
    <div
      style={{
        backgroundColor: value ? "black" : "white",
        color: value ? "white" : "black",
        height: "200px",
        padding: "20px"
      }}
    >

      <button onClick={toggle}>
        Dark Mode
      </button>

      <p>
        Režimas: {value ? "Tamsus" : "Šviesus"}
      </p>

    </div>
  );
}


export default ToggleText;