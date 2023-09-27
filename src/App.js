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
import TexteAteliernum2 from './Components/TextATelier/texteAtelier-02';
import TexteAteliernum3 from './Components/TextATelier/texteAtelier-03';
import TexteAteliernum4 from './Components/TextATelier/texteAtelier-04';
import TexteAteliernum5 from './Components/TextATelier/texteAtelier-05';
import TexteAteliernum6 from './Components/TextATelier/texteAtelier-06';
import TexteAteliernum7 from './Components/TextATelier/texteAtelier-07';
import TexteAteliernum8 from './Components/TextATelier/texteAtelier-08';
import TexteAteliernum9 from './Components/TextATelier/texteAtelier-09';
import TexteAteliernum10 from './Components/TextATelier/texteAtelier-10';
import TexteAteliernum11 from './Components/TextATelier/texteAtelier-11';
import TexteAteliernum12 from './Components/TextATelier/texteAtelier-12';
import TexteAteliernum13 from './Components/TextATelier/texteAtelier-13';
import TexteAteliernum14 from './Components/TextATelier/texteAtelier-14';
import TexteAteliernum15 from './Components/TextATelier/texteAtelier-15';
import TexteAteliernum16 from './Components/TextATelier/texteAtelier-16';
import TexteAteliernum17 from './Components/TextATelier/texteAtelier-17';
import TexteAteliernum18 from './Components/TextATelier/texteAtelier-18';
import TexteAteliernum19 from './Components/TextATelier/texteAtelier-19';
import TexteAteliernum20 from './Components/TextATelier/texteAtelier-20';
import TexteAteliernum21 from './Components/TextATelier/texteAtelier-21';
import TexteAteliernum22 from './Components/TextATelier/texteAtelier-22';
import TexteAteliernum23 from './Components/TextATelier/texteAtelier-23';



function App() {
  document.title = "Site de Beevy";
  
  
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
        <Route path="/texteatelier02" element={<TexteAteliernum2 />} />
        <Route path="/texteatelier03" element={<TexteAteliernum3 />} />
        <Route path="/texteatelier04" element={<TexteAteliernum4 />} />
        <Route path="/texteatelier05" element={<TexteAteliernum5 />} />
        <Route path="/texteatelier06" element={<TexteAteliernum6 />} />
        <Route path="/texteatelier07" element={<TexteAteliernum7 />} />
        <Route path="/texteatelier08" element={<TexteAteliernum8 />} />
        <Route path="/texteatelier09" element={<TexteAteliernum9 />} />
        <Route path="/texteatelier10" element={<TexteAteliernum10 />} />
        <Route path="/texteatelier11" element={<TexteAteliernum11 />} />
        <Route path="/texteatelier12" element={<TexteAteliernum12 />} />
        <Route path="/texteatelier13" element={<TexteAteliernum13 />} />
        <Route path="/texteatelier14" element={<TexteAteliernum14 />} />
        <Route path="/texteatelier15" element={<TexteAteliernum15 />} />
        <Route path="/texteatelier16" element={<TexteAteliernum16 />} />
        <Route path="/texteatelier17" element={<TexteAteliernum17 />} />
        <Route path="/texteatelier18" element={<TexteAteliernum18 />} />
        <Route path="/texteatelier19" element={<TexteAteliernum19 />} />
        <Route path="/texteatelier20" element={<TexteAteliernum20 />} />
        <Route path="/texteatelier21" element={<TexteAteliernum21 />} />
        <Route path="/texteatelier22" element={<TexteAteliernum22 />} />
        <Route path="/texteatelier23" element={<TexteAteliernum23 />} />

        {/* Ajoutez des routes similaires pour les autres pages */}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
