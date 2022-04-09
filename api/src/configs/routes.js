const express = require('express');

module.exports = (server) => {
    const router = express.Router();
    server.use('/api', router);

    const {cursoService} = require('../services/cursos');
    cursoService.register(router, '/cursos');

    const { contatosService } = require('../services/contatos');
    contatosService.register(router, '/contatos');
}