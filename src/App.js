import React from "react";
import "./App.css";
import Home from "./Home";
import Subscribe from "./Subscribe";

import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Tv from "./Tv";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./Protected";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/home"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />

          <Route path="/subscription" element={<Subscribe />} />
          <Route path="/tv_shows" element={<Tv />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
