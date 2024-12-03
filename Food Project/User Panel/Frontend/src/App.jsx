import React, { useState } from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";
import Auth from "./Pages/Auth/Auth";
import Cart from "./Pages/Cart/Cart";

const App = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  return (
    <div className="relative">
      <BrowserRouter>
        {isAuthOpen && <Auth setIsAuthOpen={setIsAuthOpen} />}
        <Header setIsAuthOpen={setIsAuthOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
