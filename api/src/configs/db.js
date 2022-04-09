const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost:27017/escola-impacta-db',
    { useMongoClient: true },
    error => {
        if(error){
            console.log(`Não foi possível conectar no banco de dados:`, error);
            return;
        }
        console.log('Conexão com o banco de dados realizada com sucesso');
    }
);