// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="container mx-auto py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Mi Tienda de Ropa. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
