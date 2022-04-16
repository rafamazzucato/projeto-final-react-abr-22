import axios from 'axios';
import Swal from 'sweetalert2';

export const ACTION_CURSOS_GET_DATA = 'ACTION_CURSOS_GET_DATA';
export const ACTION_CURSOS_SET_CODIGO = 'ACTION_CURSOS_SET_CODIGO';


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