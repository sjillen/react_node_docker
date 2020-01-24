import { scansApi } from '../apis';
import { FETCH_SCANS, ADD_SCAN } from './types';

export const fetchScans = async () => {
    const scanList = await scansApi.list();
    return { type: FETCH_SCANS, payload: scanList };
};

export const postScan = async repoName => {
    const newScan = await scansApi.create(repoName);
    return { type: ADD_SCAN, payload: newScan };
};
