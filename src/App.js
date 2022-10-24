import React from "react";
import "./App.css";
import Home from "./Home";
import Subscribe from "./Subscribe";

import {Routes, Route,} from 'react-router-dom';
import Login from "./Login"
import Tv from "./Tv";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/subscription" element={<Subscribe />} />
      <Route path="/tv_shows" element={<Tv />} />
      
      </Routes>

    </div>
    
  );
}

export default App;
