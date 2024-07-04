import React, { useCallback, useState } from "react";

const Increment = React.memo(({ handleIncrement }) => {
  console.log("first");
  return (
    <section className="d-flex">
      <button
        type="button"
        onClick={handleIncrement}
        className="btn btn-outline-primary"
      >
        Increment
      </button>
    </section>
  );
});

export default function Callback() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, []);

  return (
    <>
      <h1>Counter: {counter} </h1>
      <Increment handleIncrement={handleIncrement} />
    </>
  );
}
