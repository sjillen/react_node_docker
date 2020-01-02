import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => (
    <>
        <Navbar className="align-items-center" bg="dark" variant="dark">
            <Navbar.Brand className="text-center" href="#home">
                Guardrails - Security Scan Results
            </Navbar.Brand>
        </Navbar>
    </>
);

export default Header;
