import React from 'react';
import { useState } from 'react';
import Particles from 'react-tsparticles';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './containers/About';
import Home from './containers/Home';
import Resume from './containers/Resume';
import Skills from './containers/Skills';
import Honors from './containers/Honors';
import Contact from './containers/Contact';
import Navbar from './components/navbar';
import ParticlesComponent from './utils.js/particles';

function App() {
  const location = useLocation();
  console.log(location);

  const renderParticleJsInHomePage = location.pathname === "/";

  const [particlesLoaded, setParticlesLoaded] = useState(false);

  const handleInit = () => {
    setParticlesLoaded(true);
  };

  return (
    <div className="App">
      {/* particles js */}
      {renderParticleJsInHomePage && (
        <Particles id="particles" options={Particles} init={handleInit} />
      )}
      {/* navbar */}
      <Navbar />
      {/* main page content */}
      <div className="App__main-page-content">
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/Honors' element={<Honors />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
