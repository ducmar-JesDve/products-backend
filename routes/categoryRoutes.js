const express = require('express');
const router = express.Router();
const {createCategory,getCategories}=require('../controllers/categoryController');
//Registrar una categoria
router.post('/categories',createCategory);
    

//Obtener las categorias
router.get('/categories',getCategories);

module.exports =router;
