import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/home";
import Checkout from "./pages/checkout/checkout";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/checkout" Component={Checkout} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
