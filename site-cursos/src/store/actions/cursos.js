import axios from 'axios';
import Swal from 'sweetalert2';

export const ACTION_CURSOS_GET_DATA = 'ACTION_CURSOS_GET_DATA';
export const ACTION_CURSOS_SET_CODIGO = 'ACTION_CURSOS_SET_CODIGO';
export const ACTION_CURSOS_SET_DESCRICAO = 'ACTION_CURSOS_SET_DESCRICAO';
export const ACTION_CURSOS_SET_CARGA_HORARIA = 'ACTION_CURSOS_SET_CARGA_HORARIA';
export const ACTION_CURSOS_SET_PRECO = 'ACTION_CURSOS_SET_PRECO';
export const ACTION_CURSOS_SET_CATEGORIA = 'ACTION_CURSOS_SET_CATEGORIA';
export const ACTION_CURSOS_LIMPAR = 'ACTION_CURSOS_LIMPAR';
export const ACTION_CURSOS_SELECIONAR = 'ACTION_CURSOS_SELECIONAR';

const URL = 'http://localhost:3200/api/cursos';

export const getCursos = () => {
    return async dispatch => {
        try {
            const response = await axios.get(URL);
            if (response && response.data) {
                dispatch({
                    type: ACTION_CURSOS_GET_DATA,
                    payload: response.data
                });
            }
        } catch (e) {
            console.log('Ocorreu erro ao listar cursos.', e);
        }
    }
}

export const excluirCurso = (curso) => {
    return async dispatch => {
        Swal.fire({
            title: `Você deseja realmente excluir o curso ${curso.codigo} selecionado?`,
            showCancelButton: true,
            confirmButtonText: 'Excluir',
            cancelButtonText: `Cancelar`,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(URL + '/' + curso._id);
                    dispatch(getCursos());
                    Swal.fire('Curso excluído com sucesso!', '', 'success');
                } catch (e) {
                    console.log(e);
                    Swal.fire('Não foi possível excluir curso!', '', 'error');
                }
            }
        });
    }
}

export const setCodigo = e => ({
    type: ACTION_CURSOS_SET_CODIGO,
    payload: e.target.value
});

export const setDescricao = e => ({
    type: ACTION_CURSOS_SET_DESCRICAO,
    payload: e.target.value
});

export const setCargaHoraria = e => ({
    type: ACTION_CURSOS_SET_CARGA_HORARIA,
    payload: e.target.value
});

export const setPreco = e => ({
    type: ACTION_CURSOS_SET_PRECO,
    payload: e.target.value
});

export const setCategoria = e => ({
    type: ACTION_CURSOS_SET_CATEGORIA,
    payload: e.target.value
});

export const limpar = e =>{
    if(e){
        e.preventDefault();
    }

    return {
        type: ACTION_CURSOS_LIMPAR
    };
}

export const selecionarCurso = curso => ({
    type: ACTION_CURSOS_SELECIONAR,
    payload: curso
});

export const salvar = (id, codigo, descricao, cargaHoraria, preco, categoria) => {
    return async dispatch => {
        try{
            const erros = []
            if(!descricao || descricao.length < 4){
                erros.push('Descrição não informada ou inválida');
            }

            if(!cargaHoraria || cargaHoraria < 4){
                erros.push('Carga horária não informada ou inválida');
            }

            if(!preco || preco < 0){
                erros.push('Preço não informado ou inválido');
            }

            if(!categoria || categoria.length < 4){
                erros.push('Categoria não informada ou inválida');
            }

            if(erros && erros.length > 0){
                Swal.fire('Erro de validação!', erros.join('<br/>'), 'info');
                return;
            }

            const body = {
                codigo,
                descricao,
                cargaHoraria,
                preco,
                categoria
            };

            if(id){
                await axios.put(URL+'/'+id, body);
            }else{
                await axios.post(URL, body);
            }
            
            dispatch(getCursos());
            dispatch(limpar());
            Swal.fire(`Curso ${id ? 'alterado' : 'adicionado'} com sucesso!`, '', 'success');
        }catch(e){
            console.log(e);
            Swal.fire('Não foi possível adicionar curso!', '', 'error');
        }
    }
}