import { useEffect, useReducer } from 'react';
import { scanReducer } from '../reducers';
import { fetchScans, postScan } from '../actions';

const useScan = () => {
    const [scans, dispatch] = useReducer(scanReducer, []);

    const addScan = async repoName => {
        dispatch(await postScan(repoName));
    };

    useEffect(() => {
        (async () => {
            dispatch(await fetchScans());
        })();
    }, []);

    return [scans, addScan];
};

export default useScan;
