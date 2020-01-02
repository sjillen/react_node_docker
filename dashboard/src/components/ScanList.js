import React from 'react';
import ScanDetails from './ScanDetails';

const ScanList = () => {
    return (
        <ul>
            <li>
                <ScanDetails />
            </li>
            <li>
                <ScanDetails />
            </li>
            <li>
                <ScanDetails />
            </li>
        </ul>
    );
};

export default ScanList;
