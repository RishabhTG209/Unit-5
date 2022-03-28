import { LOGIN_STATUS } from "./action";

const initState = {
  loginStatus: false,
};

export const loginReducer = (store = initState, { type, payload }) => {
  // console.log(store.loginStatus);
  switch (type) {
    case LOGIN_STATUS:
      return { ...store, loginStatus: payload };

    default:
      return store;
  }
};
