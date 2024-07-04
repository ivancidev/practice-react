import React, { useReducer, useState } from "react";
import "./styles/reduce.css";

const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case "remove":
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.index),
      };
    case "toggle":
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.index
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add", text });
    setText("");
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            aria-describedby="taskHelp"
            placeholder="Enter task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index} className="mb-2">
            {todo.text}
            <button
              type="button"
              onClick={() => dispatch({ type: "remove", index })}
            >
              Delete
            </button>
            <button
              type="button"
              onClick={() => dispatch({ type: "toggle", index })}
            >
              {todo.completed ? "Uncomplete" : "Complete"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
