import axios from "axios";
export function TodoList({ todo, getData }) {



  const changeStatus = (todo) => {
    if (todo.status === false) {
      axios
        .patch(`http://localhost:3001/todos/${todo.id}`, {status: true })
        .then((res) => {
          console.log(res.data);
          getData();
        });
    } else if (todo.status == true) {
      axios
        .patch(`http://localhost:3001/todos/${todo.id}`, {status: false})
        .then((res) => {
          console.log(res.data);
          getData();
        });
    }
  };
  return (
    <div>
      {/* <h3>{todo.title}</h3> */}
      {todo.status ? (
        <div>
        <h3
          onClick={() => {
            changeStatus(todo);
          }}
          style={{ color: "red"}}
        >
          {todo.title}
        </h3>
    
        </div>
      ) : (
        <div>
        <h3
          onClick={() => {
            changeStatus(todo);
          }}
          style={{ color: "green" }}
        >
          {todo.title}
        </h3>
      
        </div>
      )}

      {/* {todo.status ? <h3>Pending</h3> : <h3>Done</h3>} */}
      {/* <h3>{todo.status}</h3> */}
      {todo.status ? (
        <button
          onClick={() => {
            changeStatus(todo);
          }}
          style={{ backgroundColor: "red" }}
        >
          Pending
        </button>
      ) : (
        <button
          onClick={() => {
            changeStatus(todo);
          }}
          style={{ backgroundColor: "green" }}
        >
          Success
        </button>
      )}
      <button onClick={()=>{
        axios
        .delete(`http://localhost:3001/todos/${todo.id}`)
        .then((res) => {
          console.log(res.data);
          getData();
        });
      }}>Delete Item</button>
    </div>
  );
}
