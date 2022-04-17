
import axios from 'axios'
export const GET_FLATS = 'GET_FLATS';

export const get_flats = (payload)=>{
    return {type: GET_FLATS,payload: payload}
}

export const get_flats_data = () => async (dispatch) => {
    try {
      const { data } = await axios.get(`https://afternoon-eyrie-36220.herokuapp.com/flat`);
      dispatch(get_flats(data));
    } catch (err) {
      console.log("Redux Get flats err", err);
    }
  };
