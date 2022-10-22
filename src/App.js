import React from "react";
import "./App.css";
import Home from "./Home";
import Subscribe from "./Subscribe";

import {Routes, Route,} from 'react-router-dom';
import Login from "./Login"

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login" element={<Subscribe />} />
      </Routes>

    </div>
    
  );
}

export default App;
