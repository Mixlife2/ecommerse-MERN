const express = require('express');
const productRoutes = require('./routes/productRoutes');


const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());

app.use('/api/products', productRoutes);



app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
