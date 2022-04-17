import { GET_LOGIN } from "./action";

const initstate = {login: false};

export const manager_reducer = (store=initstate, {type,payload}) => {
  switch (type) {
    case GET_LOGIN:
      return { ...store, login: payload };
    default:
      return store;
  }
}