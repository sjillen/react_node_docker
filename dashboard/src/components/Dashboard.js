import React from 'react';
import ScanForm from './ScanForm';
import ScanList from './ScanList';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col lg={4} sm={12}>
                    <ScanForm />
                </Col>
                <Col lg={8} sm={12}>
                    <ScanList />
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
