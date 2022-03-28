export const TodoList = ({ item, deleteTodo, doneTodo }) => {
  // console.log("item", item);
  return (
    <div>
      <h3>{item.title}</h3>
      {item.status === true ? (
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => doneTodo(item.id, item.status)}
        >
          Done
        </button>
      ) : (
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => doneTodo(item.id, item.status)}
        >
          pending
        </button>
      )}
      {/* <button onClick={() => doneTodo(item.id)}>Done</button> */}
      <button onClick={() => deleteTodo(item.id)}>Delete</button>{" "}
    </div>
  );
};
