const { poolPromise,sql } = require('../db');
//Registrar un Producto
const createProduct =async(req,res)=>{
    const{name, category_id}=req.body;
    try{
        const pool =await poolPromise;
        const request = pool.request();
        const result =await request 
        .input('name',sql.NVarChar,name)
        .input('category_id',sql.Int,category_id)
        .query('INSERT INTO products (name, category_id) OUTPUT INSERTED.id VALUES (@name, @category_id)');
        res.json({id: result.recordset[0].id});

    }catch(err){
        res.status(500).json({error:err.message});
    }
};

//Obtener los productos
const getProducts=async (req,res)=>{
    try{
        const pool = await poolPromise;
        const request = pool.request();
        const result =await request.query('SELECT * FROM products');
        res.json(result.recordset);

    }catch(err){
        res.status(500).json({error:err.message});
    }
};

module.exports={
    createProduct,
    getProducts,
};
