import { TYPE_CONTATO_LIMPAR, TYPE_CONTATO_SET_ASSUNTO, TYPE_CONTATO_SET_DATA, TYPE_CONTATO_SET_EMAIL, TYPE_CONTATO_SET_NOME } from "../actions/contato";

const INITIAL_STATE = {
    data : '2022-04-16',
    nome : '',
    email: '',
    assunto: ''
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case TYPE_CONTATO_SET_DATA : return {...state, data : action.payload};
        case TYPE_CONTATO_SET_NOME : return {...state, nome : action.payload};
        case TYPE_CONTATO_SET_EMAIL : return {...state, email : action.payload};
        case TYPE_CONTATO_SET_ASSUNTO : return {...state, assunto : action.payload};
        case TYPE_CONTATO_LIMPAR : return INITIAL_STATE;
        default: return state;
    }
}