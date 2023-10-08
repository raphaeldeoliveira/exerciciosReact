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

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/vans" element={<Vans />}/>
            <Route path="/vans/:id" element={<VanTemplate />}/>
            <Route path="/host" element={<HostLayout />}>
              <Route path="/host" element={<Dashboard />}/> 
              <Route path="/host/income" element={<Income />}/>
              <Route path="/host/reviews" element={<Reviews />}/>
            </Route>
          </Route>
        </Routes>

        <footer>©2020 #VANLIFE</footer>

      </BrowserRouter>
    </div>

  );
}

export default App;
