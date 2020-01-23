import { resultsApi } from '../apis';
import { FETCH_SCANS, ADD_SCAN } from './types';

export const fetchScans = async () => {
    const scanList = await resultsApi.listResults();
    return { type: FETCH_SCANS, payload: scanList };
};

export const postScan = async repoName => {
    const newScan = await resultsApi.postResult(repoName);
    return { type: ADD_SCAN, payload: newScan };
};
