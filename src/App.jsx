import React from 'react';
import { Route, Routes } from "react-router-dom";
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/about/About';


function App() {
  return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
   <Navbar />
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
   </Routes>
   <Footer />
   </div>

  )
}  
export default App