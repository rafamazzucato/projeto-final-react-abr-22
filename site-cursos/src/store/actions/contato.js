export const TYPE_CONTATO_SET_DATA = 'TYPE_CONTATO_SET_DATA';
export const TYPE_CONTATO_SET_NOME = 'TYPE_CONTATO_SET_NOME';
export const TYPE_CONTATO_SET_EMAIL = 'TYPE_CONTATO_SET_EMAIL';
export const TYPE_CONTATO_SET_ASSUNTO = 'TYPE_CONTATO_SET_ASSUNTO';
export const TYPE_CONTATO_LIMPAR = 'TYPE_CONTATO_LIMPAR';

export const setData = e => ({
        type: TYPE_CONTATO_SET_DATA,
        payload: e.target.value  
});

export const setNome = e => ({
    type: TYPE_CONTATO_SET_NOME,
    payload: e.target.value  
});

export const setEmail = e => ({
    type: TYPE_CONTATO_SET_EMAIL,
    payload: e.target.value  
});

export const setAssunto = e => ({
    type: TYPE_CONTATO_SET_ASSUNTO,
    payload: e.target.value  
});

export const limpar = () => ({
    type: TYPE_CONTATO_LIMPAR
});