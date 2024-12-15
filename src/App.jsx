import {useState} from 'react'
import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Vans from "./Pages/Vans.jsx";
import VanDetail from "./Pages/VanDetail.jsx";

import './server.js'

function App() {

    return (
        <BrowserRouter>
            <header>
                <Link className="site-logo" to="/">#VanLife</Link>
                <nav>
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
                <Route path="/vans/:id" element={<VanDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
