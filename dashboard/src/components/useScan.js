import { useState, useEffect } from 'react';
import { resultsApi } from '../apis';

const useScan = () => {
    const [scans, setScans] = useState([]);

    const addScan = async repoName => {
        const newScan = await resultsApi.postResult(repoName);
        setScans([...scans, newScan]);
    };

    useEffect(() => {
        (async () => {
            const scanList = await resultsApi.listResults();
            setScans(scanList);
        })();
    }, []);

    return [scans, addScan];
};

export default useScan;
