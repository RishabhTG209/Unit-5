import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { TodoInput } from "./TodoInput";
import { TodoList } from "./TodoList";

export function Todo() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = async () => {
    try {
      let res = await fetch(
        `http://localhost:3001/todos?_limit=3&_page=${page}`
      );
      let data = await res.json();
      console.log(data);
      setTodos([...data]);
    } catch (e) {
      console.log("e", e);
    }
  };

  return (
    <div>
      <TodoInput getData={getData} />
      {todos.map((e) => (
        <TodoList todo={e} key={e.id} getData={getData} />
      ))}
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}
