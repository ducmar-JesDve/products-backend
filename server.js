require('dotenv').config();

const express = require('express');
const cors = require('cors'); // Importar el paquete cors
const categoryRoutes=require('./routes/categoryRoutes');
const ProductRoutes=require('./routes/productsRoutes');
const app = express();
const port = process.env.PORT ||3000;

app.use(cors()); // Habilitar CORS para todas las rutas
// Middleware para parsear JSON
app.use(express.json());
//Rutas
app.use('/api',categoryRoutes);
app.use('/api',ProductRoutes);

//manejo de errores global
app.use((err,req,res,next)=>{
  console.error('Error global:', err);
  res.status(500).json({error:'Ocurrio un error en el servidor'});
})

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  
});
