import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Paintings from './pages/Paintings';
import PaintingDetails from './pages/PaintingDetails';
// import LargeGrid from './components/LargeGrid'; 



const App = () => {
  const location = useLocation();

  console.log('Current pathname:', location.pathname);

  const getClassForPath = (pathname) => {
    if (pathname === '/paintings') {
      return 'bg-paintings';
    } else if (pathname.match(/^\/paintings\/\d+$/)) { // bardziej precyzyjne sprawdzenie dynamicznej ścieżki
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
     <Routes>
        
        <Route path="/paintings" element={<Paintings />}/>
        <Route path="/paintings/:paintingId" element={<PaintingDetails />} />
        
        {/* Dodaj więcej tras w razie potrzeby */}
      </Routes>
      <footer>
        The footer
      </footer>
    </div>
  );
};


export default App;