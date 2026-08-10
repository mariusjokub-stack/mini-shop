import { useRef } from "react";

function ClickCounter() {
  const clickCount = useRef(0);

  const handleClick = () => {
    clickCount.current++;
    console.log("Paspaudimų skaičius:", clickCount.current);
  };

  return (
    <div>
      <button onClick={handleClick}>
        Spausk mane
      </button>
    </div>
  );
}

export default ClickCounter;