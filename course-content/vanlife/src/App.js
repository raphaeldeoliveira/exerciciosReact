import React from "react"
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import "./components/styles.scss"

import Home from "./components/Home";
import About from "./components/About";
import Vans from "./components/Vans";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <nav>
            <Link to="/">#VANLIFE</Link>
            <div>
              <Link to="/about">About</Link>
              <Link to="/vans">Vans</Link>
            </div>
          </nav>
        </header>
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
        </Routes>

        <footer>©2020 #VANLIFE</footer>

      </BrowserRouter>
    </div>

  );
}

export default App;
