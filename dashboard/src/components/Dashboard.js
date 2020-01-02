import React, { useState, useEffect } from 'react';
import ScanForm from './ScanForm';
import ScanList from './ScanList';
import { Container, Row, Col } from 'react-bootstrap';

const item = { repositoryName: 'name', status: 'pending', findings: [], queuedAt: Date.now() };
const list = [item, item, item];

const Dashboard = () => {
    const [scans, setScans] = useState(list);

    return (
        <Container className="mt-5">
            <Row>
                <Col lg={4} sm={12}>
                    <ScanForm />
                </Col>
                <Col lg={8} sm={12}>
                    <ScanList list={scans} />
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
