import React from "react";
import "./App.css";
import Home from "./Home";
import Subscribe from "./Subscribe";

import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Tv from "./Tv";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./Protected";
import Watchlist from "./Watchlist";
import Payment from "./Payment";
import StripeContainer from "./StripeContainer";

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
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/payment" element={<StripeContainer />} />
          <Route path="/tv_shows" element={<Protected><Tv /></Protected>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
