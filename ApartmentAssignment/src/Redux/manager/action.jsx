import axios from 'axios';
export const GET_LOGIN = "GET_LOGIN";

export const get_login = (payload)=>{
return {type: GET_LOGIN,payload: payload}
}

export const get_login_stat = (form) => async (dispatch) => {
    try {
      const { data } = await axios.post(`https://afternoon-eyrie-36220.herokuapp.com/login`,form);
      dispatch(get_login(data));
    } catch (err) {
      console.log("Redux Get users err", err);
    }
  };