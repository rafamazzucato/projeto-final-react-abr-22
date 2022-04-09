require('./configs/db');
const server = require('./configs/server');
const routes = require('./configs/routes');
routes(server);