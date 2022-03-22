import { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const toggleAuth = (check) => {
    console.log(check);
    if (check) {
      setAuth(true);
    } else {
      setAuth(false);
    }
    // console.log(auth);
  };
  const logout = (check) => {
    if (check) {
      setAuth(false);
      console.log("Logout Success!");
    }
  };
  return (
    <AuthContext.Provider value={{ auth, toggleAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
