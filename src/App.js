import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Paintings from './pages/Paintings';
import PaintingDetails from './pages/PaintingDetails';
import Design from './pages/Design';
import DesignDetails from './pages/DesignDetails';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
// import LargeGrid from './components/LargeGrid'; 



const App = () => {
  const location = useLocation();

  console.log('Current pathname:', location.pathname);

  const getClassForPath = (pathname) => {
    if (pathname === '/paintings') {
      return 'bg-paintings';
    } else if (pathname === '/design') {
      return 'bg-design';
    }
    else if (pathname.startsWith('/design/')) {  // Dodaj tutaj
      return 'bg-design';
    }
    else if (pathname.match(/^\/paintings\/\d+$/)) { // bardziej precyzyjne sprawdzenie dynamicznej ścieżki
      return 'bg-painting-details';
    } else {
      return '';
    }
  };

    const currentClass = getClassForPath(location.pathname);
    console.log('Assigned class:', currentClass); // Dodaj logowanie przypisanej klasy



  // const backgroundClasses = {
  //   "/paintings": "bg-paintings",
  //   "/paintings/:paintingId": "bg-painting-details",
    
  // };

  // const currentBackgroundClass = backgroundClasses[window.location.pathname] || "";

  return (
    <div className={`App ${currentClass}`}>     
      <Navbar backgroundClass={currentClass} />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paintings" element={<Paintings />}/>
        <Route path="/paintings/:paintingId" element={<PaintingDetails />} />
        <Route path="/design" element={<Design />} />
        <Route path="/design/:designId" element={<DesignDetails />} />
        <Route path="/about" element={<About />} />

        
        {/* Dodaj więcej tras w razie potrzeby */}
      </Routes>
      <footer>
        The footer
      </footer>
    </div>
  );
};


export default App;