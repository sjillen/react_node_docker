import React from 'react';
import ScanForm from './ScanForm';
import ScanList from './ScanList';
import { Container, Row, Col } from 'react-bootstrap';
import useScan from './useScan';

const Dashboard = () => {
    const [scans, addScan] = useScan();

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
