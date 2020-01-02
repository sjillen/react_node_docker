import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { Container } from 'react-bootstrap';

function App() {
    return (
        <>
            <Header />
            <Container>
                <Dashboard />
            </Container>
        </>
    );
}

export default App;
