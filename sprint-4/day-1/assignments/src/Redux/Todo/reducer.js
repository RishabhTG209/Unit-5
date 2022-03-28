import { ADD_TODO } from "./action";

const initState = {
  todos: [],
};

export const todoReducer = (store = initState, { type, payload }) => {
  console.log("todo store", store);
  switch (type) {
    case ADD_TODO:
      return { ...store, todos: payload };

    // case LOGIN_STATUS:
    //   return { ...store, loginStatus: payload };
    // case REMOVE_TODO:
    //   return {
    //     ...store,
    //     todos: store.todos.filter((todo) => todo.id != payload),
    //   };
    default:
      return store;
  }
};
