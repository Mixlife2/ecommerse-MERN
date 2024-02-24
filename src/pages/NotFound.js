import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl mb-4">Página no encontrada</h2>
      <p className="text-gray-600 mb-4">Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/" className="text-blue-500 hover:text-blue-700">Volver a la página de inicio</Link>
    </div>
  );
}

export default NotFound;
