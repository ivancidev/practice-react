import React, { useMemo, useState } from "react";

export default function Calculator() {
  const [show, setShow] = useState(true);
  const [listNumeros, setListNumeros] = useState([1, 2, 3, 4, 5]);

  const calculator = (numeros) =>
    useMemo(() => {
      console.log("Calculando");
      return numeros.reduce((a, b) => a * b);
    }, [listNumeros]);

  const handleAddNumber = () => {
    setListNumeros([...listNumeros, listNumeros.length + 1]);
  }

  return (
    <>
      <p className="text-center">{calculator(listNumeros)}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShow(!show)}
      >
        {show ? "Ocultar" : "Mostrar"}
      </button>
      <button type="button" className="btn btn-danger" onClick={handleAddNumber}>
        Calcular
      </button>
    </>
  );
}
