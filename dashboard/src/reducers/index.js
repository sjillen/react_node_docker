import { combineReducers } from 'redux';
import scansReducer from './scansReducer';

export default combineReducers({
    scans: scansReducer,
});
