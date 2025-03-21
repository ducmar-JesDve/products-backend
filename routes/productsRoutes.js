const express = require('express');
const router = express.Router();
const { createProduct,getProducts } = require('../controllers/productsController');
//Registrar un Producto
router.post('/products',createProduct);

//Obtener los productos
router.get('/products',getProducts)

module.exports =router;