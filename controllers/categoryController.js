const { poolPromise,sql } = require('../db');

const createCategory=async(req,res)=>{
    const{name}=req.body;
    try{
        const pool =await poolPromise;
        const request = pool.request();
        const result =await request  
        .input('name',sql.NVarChar,name)
        .query('INSERT INTO categories (name) OUTPUT INSERTED.id VALUES (@name)');
        res.json({id: result.recordset[0].id});

    }catch(err){
        res.status(500).json({error:err.message});
    }
};

//Obtener las categorias
const getCategories=async (req,res)=>{
    try{
        const pool = await poolPromise;
        const request = pool.request();
        const result =await request.query('SELECT * FROM categories');
        res.json(result.recordset);

    }catch(err){
        res.status(500).json({error:err.message});
    }
};

module.exports={
    createCategory,
    getCategories,
};