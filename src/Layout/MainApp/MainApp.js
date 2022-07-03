import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header/Header';
import Body from '../Body';

function MainApp() {
    return (
        <div>
            <Router>
                <Header/>
                <Body />
            </Router>
        </div>
    )
}

export default MainApp;
