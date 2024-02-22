import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo de la tienda" className="h-10 mr-4" />
          <h1 className="text-white text-xl font-bold">Mi Tienda</h1>
        </div>
        <ul className="flex items-center">
          <li className="mr-6">
            <a href="/productos" className="text-white hover:text-gray-300">
              Productos
            </a>
          </li>
          <li className="mr-6">
            <a href="/nosotros" className="text-white hover:text-gray-300">
              Nosotros
            </a>
          </li>
          <li className="mr-6">
            <a href="/contacto" className="text-white hover:text-gray-300">
              Contacto
            </a>
          </li>
          <li>
            <a href="/carrito" className="text-white hover:text-gray-300 flex items-center">
              <i className="fas fa-shopping-cart mr-2"></i>
              <span className="cart-count">0</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
