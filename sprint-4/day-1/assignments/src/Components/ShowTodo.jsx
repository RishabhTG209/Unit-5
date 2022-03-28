import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ShowTodo = () => {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    getTodo();
  }, []);
  const { id } = useParams();
  const getTodo = () => {
    axios.get(`http://localhost:3001/todos/${id}`).then(({ data }) => {
      setTodo(data);
      console.log("data", data);
    });
  };
  return <div>{todo.title}</div>;
};
