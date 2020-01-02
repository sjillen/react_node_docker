import React from 'react';
import { Form, Button } from 'react-bootstrap';

const ScanForm = () => {
    return (
        <>
            <h2>Submit a Scan Result</h2>
            <Form>
                <Form.Group controlId="formPlainText">
                    <Form.Label>Name of the Repository to scan</Form.Label>
                    <Form.Control type="text" placeholder="Enter Repository Name" />
                    <Form.Text className="text-muted">We'll never share your data with anyone else.</Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => console.log('submit')}>
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default ScanForm;
