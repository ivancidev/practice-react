import React from "react";
import "../styles/counter.css";
import useCounter from "../hooks/useCounter";

export default function Counter() {
    const { count, increment, decrement, reset } = useCounter(0);
  return (
    <>
      <h1>Counter with hooks</h1>
      <h2>Count: {count}</h2>
      <section>
        <button className="btn btn-success" onClick={increment}>Increment</button>
        <button className="btn btn-danger" onClick={decrement}>Decrement</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
      </section>
    </>
  );
}
