// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Experience from './pages/experience';
import About from './pages/about';
import Contact from './pages/contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
