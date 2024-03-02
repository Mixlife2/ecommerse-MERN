const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Importar rutas
const productsRoutes = require('./routes/productsRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Usar las rutas
app.use('/api', productsRoutes);
app.use('/api', cartRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
