import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App() {
    return (
        <>
            <Header />
            <Dashboard />
        </>
    );
}

export default App;
