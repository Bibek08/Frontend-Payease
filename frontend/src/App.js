import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SidebarLayout from "./pages/SidebarLayout";
import Signup from "./pages/Login/Signup";
import Home from "./pages/HomePage/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<SidebarLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
