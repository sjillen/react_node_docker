import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const ScanForm = ({ addScan }) => {
    const [repoName, setRepoName] = useState('');
    const [validated, setValidated] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = ev => {
        const form = ev.currentTarget;
        ev.preventDefault();

        if (form.checkValidity() === false) {
            ev.stopPropagation();
        } else {
            addScan(repoName)
                .catch(err => {
                    setError(err.message);
                })
                .then(() => {
                    setRepoName('');
                    setValidated(false);
                });
        }

        setValidated(true);
    };

    return (
        <>
            <h2>Submit a Scan Result</h2>
            {error ? <Alert variant="danger">{error}</Alert> : ''}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="formPlainText">
                    <Form.Label>Name of the Repository to scan</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Repository Name"
                        value={repoName}
                        onChange={e => setRepoName(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">You must enter a valid name!</Form.Control.Feedback>
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
