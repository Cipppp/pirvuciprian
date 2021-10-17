import './styles/output.css';
import './App.css';
import { Navbar } from './components';
import { Home } from './pages';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                {/* <Route path="/" exact component={Home} /> */}
                <h1 className="text-red-400">hello</h1>
            </Switch>
        </Router>
    );
}

export default App;
