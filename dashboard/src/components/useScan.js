import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createScan, fetchScans } from '../actions';

const useScan = () => {
    const scans = useSelector(state => state.scans.scans);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchScans());
    }, [dispatch]);

    const addScan = repoName => dispatch(createScan(repoName));

    return [scans, addScan];
};

export default useScan;
