import axios from "axios";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  //   const [arr, setArr] = useState([]);

  const handleSubmit = () => {
    axios
      .post(`https://reqres.in/api/login`, {
        email: email,
        password: pw,
      })
      .then(({ data }) => {
        console.log("token", data.token);
        localStorage.setItem(
          "login",
          JSON.stringify({ token: data.token, status: true })
        );
        refreshPage();
      });
  };

  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"Email"}
      />
      <input
        type="password"
        onChange={(e) => setPw(e.target.value)}
        placeholder={"Password"}
      />
      <input type="submit" value={"Submit"} onClick={() => handleSubmit()} />
    </div>
  );
};
