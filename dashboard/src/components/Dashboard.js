import React, { useState, useEffect } from 'react';
import ScanForm from './ScanForm';
import ScanList from './ScanList';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const item = { repositoryName: 'name', status: 'pending', findings: [], queuedAt: Date.now() };

const url = 'http://localhost:3090/results';

const Dashboard = () => {
    const [scans, setScans] = useState([]);

    const addScan = () => {
        setScans([...scans, item]);
    };

    useEffect(() => {
        (async () => {
            const response = await axios.get(url);
            setScans(response.data);
        })();
    }, []);

    return (
        <Container className="mt-5">
            <Row>
                <Col lg={4} sm={12}>
                    <ScanForm addScan={addScan} />
                </Col>
                <Col lg={8} sm={12}>
                    <ScanList list={scans} />
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
