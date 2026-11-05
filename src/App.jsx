import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/home/Home';
import Units from './pages/Units/Units';
import Zones from './pages/Zones/Zones';  
import UnitsDetails from './pages/Units/UnitsDetails';                
import ZonesProject from './pages/Zones/zonesProject';    
import ZoneDetails from './pages/Zones/ZoneDetails';      
import Developers from './pages/Developers/Developers';
import DeveloperProjects from './pages/Developers/DeveloperProjects'; 
import DeveloperDetails from './pages/Developers/DeveloperDetails'; 
import Contactus from './pages/contactus/Contactus';
import Layout from './components/Layout/Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="units" element={<Units />} />
        <Route path="/units-details/:id" element={<UnitsDetails />} />
        <Route path="zones" element={<Zones />} />
        
        <Route path="zones-project" element={<ZonesProject />} />
        
        <Route path="zones-details/:id" element={<ZoneDetails />} />
        
        <Route path="developers" element={<Developers />} /> 
        <Route path="/developer-projects/:id" element={<DeveloperProjects />} />
        <Route path="/developer-details/:id" element={<DeveloperDetails />} />
        <Route path="contactus" element={<Contactus />} />
      </Route>
    </Routes>
  );
}