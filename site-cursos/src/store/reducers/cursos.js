import { ACTION_CURSOS_GET_DATA, ACTION_CURSOS_LIMPAR, ACTION_CURSOS_SELECIONAR, ACTION_CURSOS_SET_CARGA_HORARIA, ACTION_CURSOS_SET_CATEGORIA, ACTION_CURSOS_SET_CODIGO, ACTION_CURSOS_SET_DESCRICAO, ACTION_CURSOS_SET_PRECO } from "../actions/cursos";

const INITIAL_STATE = {
    lista: [],
    _id: '',
    codigo: 0,
    descricao: '',
    cargaHoraria: 0,
    preco: 0,
    categoria: 'INFORMATICA',
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case ACTION_CURSOS_GET_DATA : return {...state, lista: action.payload};
        case ACTION_CURSOS_SET_CODIGO : return {...state, codigo: action.payload};
        case ACTION_CURSOS_SET_DESCRICAO : return {...state, descricao: action.payload};
        case ACTION_CURSOS_SET_CARGA_HORARIA : return {...state, cargaHoraria: action.payload};
        case ACTION_CURSOS_SET_PRECO : return {...state, preco: action.payload};
        case ACTION_CURSOS_SET_CATEGORIA : return {...state, categoria: action.payload};
        case ACTION_CURSOS_LIMPAR : return {...INITIAL_STATE, lista : state.lista};
        case ACTION_CURSOS_SELECIONAR : return {...state, 
            _id : action.payload._id,
            codigo : action.payload.codigo,
            descricao : action.payload.descricao,
            cargaHoraria : action.payload.cargaHoraria,
            preco : action.payload.preco,
            categoria : action.payload.categoria
        };
        default: return state;
    }
}