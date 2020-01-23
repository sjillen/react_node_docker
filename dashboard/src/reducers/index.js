import { FETCH_SCANS, ADD_SCAN } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_SCAN:
            return [...state, action.payload];
        case FETCH_SCANS:
            return action.payload;
        default:
            return state;
    }
};
