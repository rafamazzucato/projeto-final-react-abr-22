import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    getCursos,
    excluirCurso,
    selecionarCurso
} from '../../store/actions/cursos';

const CursosListagem = props => {
    const { getCursos, excluirCurso, cursos, selecionarCurso, isAdmin } = props;

    useEffect(() => {
        getCursos();
    }, []);

    const exibirLinhas = () => {
        return cursos?.map(curso => (
            <tr key={curso._id}>
                <td>{curso.codigo}</td>
                <td className="col-sm-7">{curso.descricao}</td>
                {isAdmin ?
                    <td >
                        <button className="btn btn-success" onClick={() => selecionarCurso(curso)}
                        >
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="btn btn-danger ml-2" onClick={() => excluirCurso(curso)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                    :
                    <>
                        <td>{curso.cargaHoraria}</td>
                        <td>{curso.preco}</td>
                        <td>{curso.categoria}</td>
                    </>
                }
            </tr>
        ));
    }

    return (
        <div>
            <h3>Lista de Cursos</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th className="col-sm-7">Descrição</th>
                        {isAdmin ? <th></th> :
                            <>
                                <th>Carga Horária</th>
                                <th>Preço</th>
                                <th>Categoria</th>
                            </>
                        }
                    </tr>
                </thead>
                <tbody>
                    {exibirLinhas()}
                </tbody>
            </table>
        </div>
    );
}

const mapStoreToProps = store => ({
    cursos: store.cursos.lista
});

const mapActionsToProps = dispatch => bindActionCreators({
    getCursos,
    excluirCurso,
    selecionarCurso
}, dispatch);

const conectado = connect(mapStoreToProps, mapActionsToProps)(CursosListagem);
export { conectado as CursosListagem }