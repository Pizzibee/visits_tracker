import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxThunk from 'redux-thunk';
// reducers
import countries from './countries/reducer';
import visits from './visits/reducer';

const reducers = combineReducers({
    countries,
    visits
})
const store = createStore(reducers, applyMiddleware(reduxThunk));
export default store;
