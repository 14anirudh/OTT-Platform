import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Subscribe from "./Components/Subscribe";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Tv from "./Components/Tv";
import Movies from "./Components/Movies";
import { AuthContextProvider } from "./context/AuthContext";
import { WatchlistProvider } from "./context/WatchlistContext";
import Protected from "./Protected";
import StripeContainer from "./StripeContainer";
import Reset from "./Components/Reset";
import Forget from "./Components/Forget";
import Fav from "./Components/Fav";

function App() {
  return (
    <div className="App">
      <WatchlistProvider>
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
            <Route path="/payment" element={<StripeContainer />} />
            <Route path="/forget" element={<Forget />} />
            <Route path="/reset" element={<Reset />} />
            <Route
              path="/tv_shows"
              element={
                <Protected>
                  <Tv />
                </Protected>
              }
            />
            <Route
              path="/movies"
              element={
                <Protected>
                  <Movies />
                </Protected>
              }
            />
            <Route
              path="/favourites"
              element={
                <Protected>
                  <Fav />
                </Protected>
              }
            />
          </Routes>
        </AuthContextProvider>
      </WatchlistProvider>
    </div>
  );
}

export default App;
