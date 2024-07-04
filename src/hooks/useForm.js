import { useState } from "react";

export default function useForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    userName: "",
  });
  const { email, password, userName } = form;

  const onChangeInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  return {
    form,
    onChangeInput,
    email,
    password,
    userName,
  };
}
