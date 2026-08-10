/*

import { useState } from "react";

function useInput() {
  const [value, setValue] = useState("");

  function onChange(event) {
    setValue(event.target.value);
  }

  function clear() {
    setValue("");
  }

  return {
    value,
    onChange,
    clear,
  };
}

export default useInput;

*/


import { useState } from "react";

function useInput() {

  const [value, setValue] = useState("");


  function onChange(event) {
    setValue(event.target.value);
  }


  function clear() {
    setValue("");
  }


  return {
    value,
    onChange,
    clear
  };
}


export default useInput;









