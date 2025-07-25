// App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Donation from './Components/Donation';
import CouncilMembers from './Components/CouncilMembers';
import Contact from './Components/Contact';
import Events from './Components/Events';
import Rules from './Components/Rules&Regulations';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/council" element={<CouncilMembers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
