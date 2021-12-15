import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import PropsStates from './components/PropsStates';
import About from './components/About';
import { Routes, Route, Link } from 'react-router-dom';


function App() {
    return (
        <div className="App">
                <h1>Example</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/props">PropsStates</Link>
                        </li>
                    </ul>
                </nav>
                <hr/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/props" element={<PropsStates message={"Test Message"} title={"React Props & States"} />} />
                </Routes>
        </div>
    );
}

export default App;
