// ============= REACT ==============
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// ============ COMPONENTS =============
import App from './App';
// ============= STYLED ===============

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);



