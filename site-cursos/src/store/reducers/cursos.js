import { ACTION_CURSOS_GET_DATA, ACTION_CURSOS_SET_CODIGO } from "../actions/cursos";

const INITIAL_STATE = {
    lista: [],
    codigo: 0
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case ACTION_CURSOS_GET_DATA : return {...state, lista: action.payload};
        case ACTION_CURSOS_SET_CODIGO : return {...state, codigo: action.payload};
        default: return state;
    }
}