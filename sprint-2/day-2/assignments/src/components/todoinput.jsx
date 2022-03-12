import { useState } from "react";
import { nanoid } from "nanoid";
export function TodoInput({ getData }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("http://localhost:3122/todos", {
            method: "POST",
            body: JSON.stringify({ id: nanoid(), title: text, status: false }),
            headers: {
              "content-type": "application/json",
            },
          }).then(() => {
            getData();
          });
        }}
      >
        Add Task
      </button>
    </div>
  );
}
