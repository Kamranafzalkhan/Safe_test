import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutus from './Pages/AboutUS';
import Contact from './Pages/Contact';
import Login from './Pages/Login';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Aboutus' element={<Aboutus category="Aboutus" />} />
        <Route path='/Contact' element={<Contact category="Contact" />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
