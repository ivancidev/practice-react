import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p className="text-center">Count: {state.count}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch("increment")}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch("decrement")}
      >
        Decrement
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => dispatch("reset")}
      >
        Reset
      </button>
    </>
  );
}
