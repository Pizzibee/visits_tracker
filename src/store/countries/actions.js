import { FETCH_COUNTRIES } from './types';
import axios from 'axios';

export const fetchCountries = (dispatch) => {
  axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        dispatch({
          type:FETCH_COUNTRIES,
          countries: res.data
        })
      });
}
