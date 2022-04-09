const nodeRestful = require('node-restful');
const Schema = nodeRestful.mongoose.Schema;

const CursosSchema = new Schema({
    codigo: { type: Number, required: true },
    descricao: { type: String, required: true },
    cargaHoraria: { type: Number, required: true, min: 4 },
    preco: { type: Number, min: 0 , default: 0},
    categoria: {
        type: String, uppercase: true,
        enum: ['INFORMATICA', 'ENGENHARIA', 'ADMINISTRACAO', 'REDES']
    }
});

exports.model = nodeRestful.model('cursos', CursosSchema);