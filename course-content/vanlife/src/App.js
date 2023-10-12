import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./components/styles.scss"

import Home from "./components/Home";
import About from "./components/About";
import Vans from "./pages/vans/Vans";
import VanTemplate from "./pages/vans/VanTemplate";

import Layout from "./components/Layout";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./pages/host/HostLayout";
import Dashboard from "./pages/host/Dashboard";
import VansHost from "./pages/host/VansHost";
import VansHostTemplate from "./pages/host/VansHostTemplate";

import Details from "./pages/host/vans-pages/Details";
import Pricing from "./pages/host/vans-pages/Pricing";
import Photos from "./pages/host/vans-pages/Photos";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />}/>
            <Route path="vans" element={<Vans />}/>
            <Route path="vans/:id" element={<VanTemplate />}/>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />}/> 
              <Route path="income" element={<Income />}/>
              <Route path="vans" element={<VansHost />}/>
              <Route path="vans/:id" element={<VansHostTemplate />}>
                <Route index element={<Details />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="photos" element={<Photos />} />
              </Route>
              <Route path="reviews" element={<Reviews />}/>
            </Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
