import useCounter from "../useCounter";

function CounterOne() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h2>Pirmas skaitiklis</h2>

      <p>{count}</p>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;