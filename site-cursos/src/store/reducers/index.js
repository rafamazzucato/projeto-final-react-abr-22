import {combineReducers} from 'redux';

import contatoReducer from './contato';
import cursosReducer from './cursos';

const reducers = combineReducers({
    contato : contatoReducer,
    cursos: cursosReducer
});

export default reducers;