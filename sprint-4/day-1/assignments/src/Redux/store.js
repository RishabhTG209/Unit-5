import { createStore, combineReducers } from "redux";
import { todoReducer } from "./Todo/reducer";
import { loginReducer } from "./Login/reducer";

// export const store = createStore(reducer, {
//   todos: [],
//   loginStatus: false,
// });

const rootReducers = combineReducers({
  todos: todoReducer,
  loginStatus: loginReducer,
});

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
