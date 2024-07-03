import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Paintings from './pages/Paintings';

function App() {
  return (
    
    <Router>
      {/* <Navbar /> */}
      <div className="App">
        <Routes>
          {/* <Route path="/" /> */}
          <Route path="/paintings" element={<Paintings />} />
        </Routes>
      </div>
      <footer>
        The footer
      </footer>
      </Router>
  );
}

export default App;
