import React, { useState } from "react";
import tasksValues from "../utils/tasks";
import { GoTasklist } from "react-icons/go";
import AddTask from "../components/AddTask";

const Item = ({ name, done }) => {
  return <li>{name}{done? "✅" : "❌"}</li>;
};

export const ListTasks = () => {
  const [tasks, setTasks] = useState(tasksValues);
  console.log(tasks);
  return (
    <>
      <h1>List taks <GoTasklist style={{ fontSize: "1em" }} /></h1>
      <AddTask setTasks={setTasks} />
      <ol>
        {tasks.map((task) => {
          return <Item key={task.name} name={task.name} done={task.done}></Item>;
        })}
      </ol>
    </>
  );
};
