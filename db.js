const sql=require('mssql');


const config = {
  user: process.env.BD_USER,
  password: process.env.BD_PASSWORD,
  url: process.env.BD_URL,
  server: process.env.BD_SERVER,
  port:  parseInt( process.env.BD_PORT,10), // Añadido el puerto explícitamente
  database: process.env.BD_NAME,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};


const poolPromise = new sql.ConnectionPool(config)
.connect()
.then(pool =>{
    console.log('Conectado a Sql Server');
    return pool;
})
.catch(err => {('Error al conectar a Sql Server');

});
  
module.exports ={sql,poolPromise};