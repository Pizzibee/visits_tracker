import { DELETE_VISIT } from './types';
import { ADD_VISIT } from './types';

export const deleteVisit = (dispatch, id) => {
  dispatch( {
    type:DELETE_VISIT,
    id: id
  });
}
 export const addVisit = (dispatch, visit) => {
   dispatch( {
     type: ADD_VISIT,
     visit: visit
   });
 }
