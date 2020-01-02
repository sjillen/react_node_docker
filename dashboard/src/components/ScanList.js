import React from 'react';
import { Accordion, Card, Badge, Row, Col } from 'react-bootstrap';
import ScanDetails from './ScanDetails';

const ScanList = ({ list }) => {
    const displayCorrectTimestamp = scan => {
        if (scan.status === 'Success' || scan.status === 'Failure') {
            return scan.finishedAt;
        }
        if (scan.status === 'In Progress') {
            return scan.scanningAt;
        }
        return scan.queuedAt;
    };

    return (
        <>
            <h2>Security Scan Results</h2>
            <Accordion>
                <Card bg="primary" text="white">
                    <Card.Header>
                        <Row>
                            <Col sm={3}>Name</Col>
                            <Col sm={3}>Status</Col>
                            <Col sm={5}>Timestamp</Col>
                        </Row>
                    </Card.Header>
                </Card>
                {list.map((scan, index) => (
                    <Card key={index}>
                        <Accordion.Toggle style={{ cursor: 'pointer' }} as={Card.Header} eventKey={index}>
                            <Row>
                                <Col sm={3}>{scan.repositoryName}</Col>
                                <Col sm={3}>{scan.status}</Col>
                                <Col sm={5}>{displayCorrectTimestamp(scan)}</Col>
                                <Col sm={1}>
                                    {scan.findings.length > 0 ? (
                                        <Badge pill variant="warning">
                                            {scan.findings.length}
                                        </Badge>
                                    ) : (
                                        ''
                                    )}
                                </Col>
                            </Row>
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey={index}>
                            <Card.Body className="center-align">
                                {scan.findings.length > 0 ? (
                                    <ScanDetails findings={scan.findings} />
                                ) : (
                                    <h5>No Security Issue Found</h5>
                                )}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}
            </Accordion>
        </>
    );
};

export default ScanList;
