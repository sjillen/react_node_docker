import { FETCH_SCANS, ADD_SCAN } from '../actions/types';

export default (state = { scans: [] }, action) => {
    let { scans } = state;

    switch (action.type) {
        case FETCH_SCANS:
            scans = action.payload;
            break;
        case ADD_SCAN:
            scans = [...scans, action.payload];
            break;
        default:
            break;
    }

    return { scans };
};
