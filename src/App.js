import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu';
import Bio from './Components/Bio';
import Home from './Components/Home';
import Atelier from './Components/Atelier';
import Presse from './Components/Presse';
import Contact from './Components/Contact';
import Tarif from './Components/Tarif';
import TexteAtelier from './Components/TexteAtelier';
import Creative from './Components/Creative';
import Confiance from './Components/Confiance';
import Podcast from './Components/Podcast';
import TexteAteliernum1 from './Components/TextATelier/TexteAtelier-01';

function App() {
  return (
    <Router>
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/atelier" element={<Atelier />} />
        <Route path="/presse" element={<Presse />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tarif" element={<Tarif />} />
        <Route path="/texteatelier" element={<TexteAtelier />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/confiance" element={<Confiance />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/texteatelier01" element={<TexteAteliernum1 />} />
        {/* Ajoutez des routes similaires pour les autres pages */}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
