import React, { useEffect, useRef, useState } from "react";
import "./styles/register.css";
import useForm from "../../hooks/useForm";

export default function Register() {
  const { userName, email, password, onChangeInput, form } = useForm();
  const btnRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Register Form</h2>
      <div className="form-group mt-4">
        <label htmlFor="exampleInputName">User name</label>
        <input
          type="text"
          className="form-control mt-2"
          aria-describedby="emailHelp"
          placeholder="Enter user name"
          value={userName}
          onChange={onChangeInput}
          name="userName"
        />
      </div>
      <div className="form-group mt-4">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control mt-2"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={email}
          onChange={onChangeInput}
          name="email"
        />
      </div>
      <div className="form-group mt-4">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control mt-2"
          placeholder="Password"
          value={password}
          onChange={onChangeInput}
          name="password"
        />
      </div>
      <div className="btnDiv">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
