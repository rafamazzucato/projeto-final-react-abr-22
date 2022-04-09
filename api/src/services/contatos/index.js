const {model} = require('./model');

model.methods(['get', 'post', 'put']);
model.updateOptions({ new: true, runValidators: true});

exports.contatosService = model;