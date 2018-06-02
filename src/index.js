import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

ReactDOM.render(

    <BrowserRouter>
        <App />
    </BrowserRouter>

    , document.getElementById('root'));
registerServiceWorker();
