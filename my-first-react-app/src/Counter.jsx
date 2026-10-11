/*

import { useState } from 'react'
import './App.css'


function Counter() {
  const [count, setCount] = useState(0) 
   
const addCount=() => {
  setCount(count +1);
}
const reduceCount=() => {
  setCount(count -1);
}


return (
    <>
    <section id="center">
      <div>
      
      <button
      type="button"
      className="counter"
      onClick={addCount}
      >
        +
    </button>
    

      <button
      type="button"
      className="counter"
      onClick={reduceCount}
      >
        -
    </button>
</div>

         <div>Count is {count}</div>
    </section>
 
   
    </>
  )
}

export default Counter;

*/
/*
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  console.log("Counter render");

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}

export default Counter;

*/

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  console.log("Counter render");

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}

export default Counter;