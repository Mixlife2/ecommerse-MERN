import React from 'react';
import Navbar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Contenido de la aplicación */}
      <div className="container mx-auto py-4">
        {/* Aquí irán tus componentes y contenido */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Bienvenido a Mi Tienda de Ropa</h1>
        <p className="text-lg text-gray-700">Explora nuestra selección de ropa de moda y encuentra las mejores ofertas.</p>
        {/* Otros componentes y contenido */}
      </div>

      {/* Footer u otro contenido al final de la página */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Mi Tienda de Ropa. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
