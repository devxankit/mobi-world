import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllPhones from "./pages/AllPhones";
import Navbar from "./components/Navbar";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<AllPhones />} />
      </Routes>
    </Router>
  );
}

export default App;
