import React from 'react';
import './styles/output.css';
import './App.css';
import { Navbar } from './components';
import { Main, Privacy, Terms } from './pages';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/privacy-policy" exact component={Privacy} />
                <Route path="/terms" exact component={Terms} />
            </Switch>

            <ToastContainer
                style={{
                    fontFamily: 'Josefin Sans',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                limit={1}
                position="top-center"
                autoClose={1200}
                hideProgressBar={true}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                toastClassName="relative font-josefin flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
            />
        </Router>
    );
}

export default App;
