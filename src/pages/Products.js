import React from 'react';

const Product = () => {
  const products = [
    {
      id: 1,
      name: 'Camiseta básica',
      price: 20.99,
      description: 'Una camiseta básica de algodón para uso diario.',
      image: 'ruta/de/la/imagen1.jpg'
    },
    {
      id: 2,
      name: 'Jeans ajustados',
      price: 39.99,
      description: 'Jeans ajustados de alta calidad para un look moderno.',
      image: 'ruta/de/la/imagen2.jpg'
    },
    {
      id: 3,
      name: 'Camiseta básica',
      price: 20.99,
      description: 'Una camiseta básica de algodón para uso diario.',
      image: 'ruta/de/la/imagen1.jpg'
    },
    {
      id: 4,
      name: 'Jeans ajustados',
      price: 39.99,
      description: 'Jeans ajustados de alta calidad para un look moderno.',
      image: 'ruta/de/la/imagen2.jpg'
    },
    {
      id: 5,
      name: 'Camiseta básica',
      price: 20.99,
      description: 'Una camiseta básica de algodón para uso diario.',
      image: 'ruta/de/la/imagen1.jpg'
    },
    {
      id: 6,
      name: 'Jeans ajustados',
      price: 39.99,
      description: 'Jeans ajustados de alta calidad para un look moderno.',
      image: 'ruta/de/la/imagen2.jpg'
    },
    {
      id: 7,
      name: 'Camiseta básica',
      price: 20.99,
      description: 'Una camiseta básica de algodón para uso diario.',
      image: 'ruta/de/la/imagen1.jpg'
    },
    {
      id: 8,
      name: 'Jeans ajustados',
      price: 39.99,
      description: 'Jeans ajustados de alta calidad para un look moderno.',
      image: 'ruta/de/la/imagen2.jpg'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Nuestros Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">${product.price}</p>
            <p className="text-gray-700">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
