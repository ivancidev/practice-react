import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function AddTask({ setTasks }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    const newTask = {
      name: inputValue,
      done: false,
    };
    event.preventDefault();
    console.log(newTask);
    setTasks((tasks) => [...tasks, newTask]);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input value={inputValue} onChange={handleInputChange} />
        <Button text={"Add"} onClick={handleSubmit} />
      </form>
    </>
  );
}
