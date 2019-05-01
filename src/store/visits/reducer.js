import { ADD_VISIT } from './types';
import { DELETE_VISIT } from './types';


function visitsReducer(state = [], action) {
  switch (action.type) {
    case ADD_VISIT:
      if (state.find(visit => visit.countryName === action.visit.countryName)){
        return state;
      }
      action.visit.id = Math.random();
      return [...state, action.visit]
    case DELETE_VISIT:
     return state.filter(visit => {
         return visit.id !== action.id
       })
    default:
      return state;
  }
}

export default visitsReducer;
