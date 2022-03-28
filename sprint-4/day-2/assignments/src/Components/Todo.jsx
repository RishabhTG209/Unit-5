import axios from "axios";
import { useEffect, useState } from "react";
import { TodoList } from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Todo/action.js";
import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import { Login } from "./Login";
export const Todo = () => {
  const [text, setText] = useState("");
  const [auth, setAuth] = useState(false);
  const dispatch = useDispatch();

  const { todos } = useSelector((store) => store.todos);
  // const loginStatus = useSelector((store) => store.loginStatus);

  const checkLogin = () => {
    const loginObj = JSON.parse(localStorage.getItem("login")) || {};
    if (loginObj.token) {
      setAuth(true);
      // refreshPage();
    }
    console.log("loginObj", loginObj);
  };

  useEffect(() => {
    getTodos();
    checkLogin();
    // window.location.reload();
  }, []);

  const handleAdd = () => {
    axios
      .post(`http://localhost:3001/todos`, {
        id: nanoid(),
        title: text,
        status: false,
      })
      .then(() => getTodos());
  };

  const getTodos = () => {
    axios.get(`http://localhost:3001/todos`).then(({ data }) => {
      dispatch(addTodo(data));
      // console.log("data", data);
    });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/todos/${id}`).then(() => getTodos());
  };
  const doneTodo = (id, check) => {
    if (check) {
      axios
        .patch(`http://localhost:3001/todos/${id}`, {
          status: false,
        })
        .then(() => getTodos());
    } else {
      axios
        .patch(`http://localhost:3001/todos/${id}`, {
          status: true,
        })
        .then(() => getTodos());
    }
  };
  return auth === false ? (
    <div>
      <br />
      <Login />
      <br />
      <h3>Please Login First</h3>
    </div>
  ) : (
    <div>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          handleAdd();
        }}
      >
        Add todo
      </button>
      {todos.map((el) => {
        return (
          <div key={el.id}>
            <TodoList
              key={el.id}
              item={el}
              deleteTodo={deleteTodo}
              doneTodo={doneTodo}
            />
            <button>
              <Link to={`/todos/${el.id}`}>Click</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};
