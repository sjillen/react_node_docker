import scanApi from '../apis/scanApi';
import { FETCH_SCANS, ADD_SCAN } from './types';

export const fetchScans = () => async dispatch => {
    try {
        const response = await scanApi.get('/results');
        dispatch({ type: FETCH_SCANS, payload: response.data });
    } catch (e) {
        throw new Error('could not fetch scans');
    }
};

export const createScan = repoName => async (dispatch, getState) => {
    try {
        const response = await scanApi.post('/results', { repoName });
        dispatch({ type: ADD_SCAN, payload: response.data });
    } catch (e) {
        throw new Error('Could not submit scan');
    }
};
