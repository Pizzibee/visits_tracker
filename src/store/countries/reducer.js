import { FETCH_COUNTRIES } from './types';

function countriesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return action.countries;
    default:
      return state;
  }
}

export default countriesReducer;
