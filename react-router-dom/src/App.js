import React from 'react'
// import react router DOM stuff
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ThankYou from './pages/ThankYou'
import Posts from './pages/Posts'

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-sm bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/posts">Posts</Link>
                    </li>
                </ul>
            </nav>
            <div className="container">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/thank-you">
                        <ThankYou />
                    </Route>
                    <Route exact path="/posts">
                        <Posts />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
