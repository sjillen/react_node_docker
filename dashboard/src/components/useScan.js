import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'http://localhost:3090/results';

const useScan = () => {
    const [scans, setScans] = useState([]);

    const addScan = async repoName => {
        let response;
        try {
            response = await axios.post(url, { repoName });
            setScans([...scans, response.data]);
        } catch (e) {
            throw new Error('The name you entered does not contain authorized characters!');
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(url);
                setScans(response.data);
            } catch (e) {
                throw new Error('could not fetch scan, there is likely a problem with the server');
            }
        })();
    }, []);

    return [scans, addScan];
};

export default useScan;
