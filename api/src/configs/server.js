const port = 3200;
const express = require('express');
const cors = require('./cors');

const server = express();

server.use(express.urlencoded({extended : true}));
server.use(express.json());
server.use(cors);

server.listen(port, error =>{
    if(error){
        console.log(`Não foi possível subir o servidor Express:`, error);
        return;
    }
    console.log(`Servidor no ar na porta: ${port}`);
});

module.exports = server;