import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ScanForm = ({ addScan }) => {
    const [repoName, setRepoName] = useState('');
    return (
        <>
            <h2>Submit a Scan Result</h2>
            <Form
                onSubmit={e => {
                    e.preventDefault();
                    addScan({ repoName });
                }}
            >
                <Form.Group controlId="formPlainText">
                    <Form.Label>Name of the Repository to scan</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Repository Name"
                        value={repoName}
                        onChange={e => setRepoName(e.target.value)}
                    />
                    <Form.Text className="text-muted">We'll never share your data with anyone else.</Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
};

export default ScanForm;
