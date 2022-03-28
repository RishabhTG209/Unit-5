// import logo from "./logo.svg";
import "./App.css";
import { Todo } from "./Components/Todo";
// import { TodoList } from "./Components/TodoList";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { ShowTodo } from "./Components/ShowTodo";
import { Login } from "./Components/Login";
// import { useSelector } from "react-redux";

function App() {
  // const loginStatus = useSelector((store) => store.loginStatus);
  // console.log("login-Status", loginStatus);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/todos/:id" element={<ShowTodo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Todo /> */}
    </div>
  );
}

export default App;
