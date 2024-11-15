import { Routes, Route, useLocation } from 'react-router-dom';
import {useEffect} from 'react';
import './App.css';
import Paintings from './pages/Paintings';
import PaintingDetails from './pages/PaintingDetails';
import Design from './pages/Design';
import DesignDetails from './pages/DesignDetails';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// import LargeGrid from './components/LargeGrid'; 



const App = () => {
  const location = useLocation();

 

const hideNavbar = location.pathname.match(/^\/paintings\/\d+$/) || location.pathname.match(/^\/design\/\d+$/);

const getClassForPath = (pathname) => {
  if (pathname === '/') {
    return 'bg-home';
  } else if (pathname.startsWith('/paintings/')) {
    return 'bg-painting-details';
  } else if (pathname.startsWith('/paintings')) {
    return 'bg-paintings';
  } else if (pathname.startsWith('/design/')) {
    return 'bg-design';
  } else if (pathname.startsWith('/design')) {
    return 'bg-design';
  } else if (pathname === '/about') {
    return 'bg-about';
  } else if (pathname === '/contact') {
    return 'bg-contact';
  } else {
    return '';
  }
};


const currentClass = getClassForPath(location.pathname);


useEffect(() => {
  document.body.className = currentClass;
}, [currentClass]);
    



  // const backgroundClasses = {
  //   "/paintings": "bg-paintings",
  //   "/paintings/:paintingId": "bg-painting-details",
    
  // };

  // const currentBackgroundClass = backgroundClasses[window.location.pathname] || "";

  return (
    <div className={`App ${currentClass}`}>     
      {!hideNavbar && <Navbar backgroundClass={currentClass} />}
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paintings" element={<Paintings />}/>
        <Route path="/paintings/:paintingId" element={<PaintingDetails />} />
        <Route path="/design" element={<Design />} />
        <Route path="/design/:designId" element={<DesignDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        
        {/* Dodaj więcej tras w razie potrzeby */}
      </Routes>
      
    </div>
  );
};


export default App;

