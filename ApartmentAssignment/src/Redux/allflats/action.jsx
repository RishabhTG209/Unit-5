
import axios from 'axios'
export const GET_FLATS = 'GET_FLATS';

export const get_flats = (payload)=>{
    return {type: GET_FLATS,payload: payload}
}

export const get_flats_data = () => async (dispatch) => {
    try {
      const { data } = await axios.get(`https://afternoon-eyrie-36220.herokuapp.com/flat`);
      dispatch(get_flats(data));
    } catch (error) {
      console.log("Flat Error from Redux", error);
    }
  };

  export const SortingFlats = (value) => async (dispatch) => {
    try {
      const { data } = await axios.get(`https://afternoon-eyrie-36220.herokuapp.com/flat/?sort=${value}`);
      dispatch(get_flats(data));
    } catch (error) {
      console.log("Flat Error from Redux", error);
    }
  };

  export const FilterBlock = (value) => async (dispatch) => {
    try {
      const { data } = await axios.get(`https://afternoon-eyrie-36220.herokuapp.com/flat/block/?filter=${value}`);
      dispatch(get_flats(data));
    } catch (error) {
      console.log("Flat Error from Redux", error);
    }
  };

  export const FilterType = (value) => async (dispatch) => {
    try {
      const { data } = await axios.get(`https://afternoon-eyrie-36220.herokuapp.com/flat/type/?filter=${value}`);
      dispatch(get_flats(data));
    } catch (error) {
      console.log("Flat Error from Redux", error);
    }
  };