import {useState} from 'react'
import './App.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Vans from "./Pages/Vans/Vans.jsx";
import VanDetail from "./Pages/Vans/VanDetail.jsx";

import './server.js'
import Layout from "./Components/Layout.jsx";
import Dashboard from "./Pages/Host/Dashboard.jsx";
import Income from "./Pages/Host/Income.jsx";
import Reviews from "./Pages/Host/Reviews.jsx";
import HostLayout from "./Components/HostLayout.jsx";
import HostVans from "./Pages/Host/HostVans.jsx";
import HostVanDetail from "./Pages/Host/HostVanDetail.jsx";
import HostVanInfo from "./Pages/Host/HostVanInfo.jsx";
import HostVanPricing from "./Pages/Host/HostVanPricing.jsx";
import HostVanPhotos from "./Pages/Host/HostVanPhoto.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>

                    <Route path="vans">
                        <Route index element={<Vans/>}/>
                        <Route path=":id" element={<VanDetail/>}/>
                    </Route>

                    <Route path="host" element={<HostLayout/>}>
                        <Route index element={<Dashboard/>}/>
                        <Route path="income" element={<Income/>}/>
                        <Route path="reviews" element={<Reviews/>}/>
                        <Route path="vans">
                            <Route index element={<HostVans/>} />
                            <Route path=":id" element={<HostVanDetail/>}>
                                <Route index element={<HostVanInfo />} />
                                <Route path="pricing" element={<HostVanPricing />} />
                                <Route path="photos" element={<HostVanPhotos />} />
                            </Route>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
