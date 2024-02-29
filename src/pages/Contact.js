import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <p className="text-gray-700 mb-4">¿Tienes alguna pregunta o comentario? ¡Estamos aquí para ayudarte!</p>
      <form>
        <label htmlFor="name" className="block mb-2">Nombre:</label>
        <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded-md mb-4" required />
        <label htmlFor="email" className="block mb-2">Correo Electrónico:</label>
        <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded-md mb-4" required />
        <label htmlFor="message" className="block mb-2">Mensaje:</label>
        <textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded-md mb-4" rows="4" required></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Enviar Mensaje</button>
      </form>
      <div className="contact-info mt-6">
        <p className="text-gray-700">Email: ejemplo@mitienda.com</p>
        <p className="text-gray-700">Teléfono: 123-456-7890</p>
      </div>
    </div>
  );
};

export default Contact;
