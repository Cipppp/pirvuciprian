import React from 'react';
import './styles/output.css';
import './App.css';
import { Navbar } from './components';
import { Main } from './pages';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Main} />
            </Switch>
        </Router>
    );
}

export default App;
