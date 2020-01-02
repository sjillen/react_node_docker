import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'http://localhost:3090/results';

const useScan = () => {
    const [scans, setScans] = useState([]);

    const addScan = async repoName => {
        const response = await axios.post(url, { repoName });
        setScans([...scans, response.data]);
    };

    useEffect(() => {
        (async () => {
            const response = await axios.get(url);
            setScans(response.data);
        })();
    }, []);

    return [scans, addScan];
};

export default useScan;
