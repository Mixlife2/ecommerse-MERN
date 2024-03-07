import React from 'react';
import ClothingCategories from '../components/ClothingCategories/ClothingCategories';

const Home = () => {
  return (
    <div>
      
      <section className="banner-section">
        <div className="banner-content">
          <h1>Bienvenido a Mi Tienda de Ropa</h1>
          <p>Encuentra las últimas tendencias de moda aquí.</p>
          <button>Explorar ahora</button>
        </div>
      </section>

      {/* Sección de Categorías de Ropa */}
      <ClothingCategories />

      {/* Sección de Destacados */}
      <section className="featured-section">
        <h2>Productos Destacados</h2>
        {/* Aquí podrías incluir una lista de productos destacados */}
      </section>

      {/* Sección de Ofertas Especiales */}
      <section className="special-offers-section">
        <h2>Ofertas Especiales</h2>
        {/* Aquí podrías incluir una lista de ofertas especiales */}
      </section>

      {/* Otras Secciones */}
      {/* Puedes agregar más secciones como Novedades, Testimonios, etc. */}
    </div>
  );
}

export default Home;
