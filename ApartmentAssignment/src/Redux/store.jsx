import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { manager_reducer } from "./manager/reducer";
import thunk from "redux-thunk";
import { flat_reducer } from "./allflats/reducer";

const rootReducers = combineReducers({
  flats: flat_reducer,
  users: manager_reducer,
});

const loggerMiddlewares1 = (store) => (next) => (action) => {
  if (typeof action === "function") {
    return action(store.dispatch);
  }
  next(action); 
};


export const store = createStore(
  rootReducers,
  applyMiddleware(loggerMiddlewares1),

);

