import React, { useRef } from 'react';

function ClearInputComponent() {
  // Sukuriame nuorodą į input elementą
  const inputRef = useRef(null);

  const handleClear = () => {
    // Išvalome įvesties lauką
    inputRef.current.value = '';
    // Grąžiname fokusą į input laukelį
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Įveskite tekstą..." />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default ClearInputComponent;
