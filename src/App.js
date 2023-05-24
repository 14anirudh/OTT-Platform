import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Subscribe from "./Components/Subscribe";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Tv from "./Components/Tv";
import Movies from "./Components/Movies";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./Protected";
import Watchlist from "./Components/Watchlist";
import StripeContainer from "./StripeContainer";
import Reset from "./Components/Reset";
import Forget from "./Components/Forget"

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
          <Route path="/watchlist" element={<Protected><Watchlist /></Protected>} />
          <Route path="/payment" element={<StripeContainer />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/tv_shows" element={<Protected><Tv /></Protected>} />
          <Route path="/movies" element={<Protected><Movies /></Protected>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
