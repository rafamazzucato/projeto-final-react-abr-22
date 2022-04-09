const nodeRestful = require('node-restful');
const Schema = nodeRestful.mongoose.Schema;

const ContatosSchema = new Schema({
    data: { type: Date, required: true },
    nome: { type: String, required: true },
    email: {type: String, required: true},
    assunto: { type: String, required: true },
    respondido : { type : Boolean, default : false}
});

exports.model = nodeRestful.model('contatos', ContatosSchema);