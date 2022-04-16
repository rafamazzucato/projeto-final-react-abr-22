import React from 'react';

export const CursosListagem = props => {
    const exibirLinhas = () => {
        const {cursos, confirmarExclusao, selecionarCurso} = props;

        return cursos?.map(curso => (
            <tr key={curso._id}>
                <td>{curso.codigo}</td>
                <td className="col-sm-7">{curso.descricao}</td>
                <td >
                    <button className="btn btn-success" onClick={() => selecionarCurso(curso)}>
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="btn btn-danger ml-2" onClick={() => confirmarExclusao(curso)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {exibirLinhas()}
                </tbody>
            </table>
        </div>
    );
}