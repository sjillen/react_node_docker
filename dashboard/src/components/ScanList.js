import React from 'react';
import ScanDetails from './ScanDetails';
import { Accordion, Card, Badge, Row, Col } from 'react-bootstrap';

const ScanList = ({ list }) => {
    return (
        <>
            <h2>Security Scan Results</h2>
            <Accordion>
                {list.map((scan, index) => (
                    <Card key={index}>
                        <Accordion.Toggle as={Card.Header} eventKey={index}>
                            <Row>
                                <Col sm={3}>{scan.repositoryName}</Col>
                                <Col sm={3}>{scan.status}</Col>
                                <Col sm={5}>{scan.queuedAt}</Col>
                                <Col sm={1}>
                                    <Badge pill variant="warning">
                                        {scan.findings.length}
                                    </Badge>
                                </Col>
                            </Row>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey={index}>
                            <Card.Body className="center-align">
                                <ScanDetails findings={scan.findings} />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}
            </Accordion>
        </>
    );
};

export default ScanList;
