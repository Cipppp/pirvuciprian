import React from 'react';
import './styles/output.css';
import './App.css';
import { Navbar } from './components';
import { Main, Privacy, Terms } from './pages';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/privacy-policy" exact component={Privacy} />
                <Route path="/terms" exact component={Terms} />
            </Switch>
        </Router>
    );
}

export default App;
