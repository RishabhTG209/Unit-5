import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Status } from "./Status";

export const Navbar = () => {
  const [token, setToken] = useState("Login Please!");
  const { auth, toggleAuth, logout } = useContext(AuthContext);

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const loginReq = async () => {
    try {
      let res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        body: JSON.stringify({
          email: details.email,
          password: details.password,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      let data = await res.json();
      if (data.token) {
        toggleAuth(true);
        setToken(data.token);
      } else {
        setToken("Logout Success!");
        toggleAuth(false);
      }
      console.log("data", data);
    } catch (e) {
      console.log("e", e);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDetails({ ...details, [id]: value });
    // console.log(details);
  };
  return (
    <div>
      <input
        type="email"
        id="email"
        onChange={(e) => handleChange(e)}
        required
      />
      <input
        type="text"
        id="password"
        onChange={(e) => handleChange(e)}
        required
      />

      <button
        onClick={() => {
          //   console.log(auth, "auth");
          if (auth) {
            logout(auth);
          } else {
            loginReq();
          }

          //   console.log(auth);
        }}
      >
        {auth ? "Logout" : "Login"}
      </button>
      <br />
      {auth ? <Status token={token} /> : <Status token={"Login Please"} />}
    </div>
  );
};

//eve.holt@reqres.in ---> cityslicka
