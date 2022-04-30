import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    setCodigo,
    setDescricao,
    setCargaHoraria,
    setPreco,
    setCategoria,
    limpar,
    salvar
} from '../../store/actions/cursos';

const CursosFormulario = props => {

    const { 
        id,
        codigo,
        descricao,
        cargaHoraria,
        preco,
        categoria,

        setCodigo,
        setDescricao,
        setCargaHoraria,
        setPreco,
        setCategoria,

        limpar,
        salvar
    
    } = props;

    return (
        <div className="border-right pl-3 pr-3">
            <h3 className="border-bottom">Formulário</h3>
            <form>
                <div className="form-group row">
                    <label htmlFor="codigo"
                        className="col-sm-3 col-form-label">
                        Código:
                    </label>
                    <div className="col-sm-9">
                        <input type="number"
                            value={codigo}
                            onChange={setCodigo}
                            className="form-control mb-1" id="codigo" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="descrição"
                        className="col-sm-3 col-form-label">
                        Descrição:
                    </label>
                    <div className="col-sm-9">
                        <input type="text"
                            value={descricao}
                            onChange={setDescricao}
                            className="form-control" id="descricao" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="cargaHoraria"
                        className="col-sm-3 col-form-label">
                        Carga Horária:</label>
                    <div className="col-sm-9">
                        <input type="number"
                            value={cargaHoraria}
                            onChange={setCargaHoraria}
                            className="form-control" id="cargaHoraria" />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="preco"
                        className="col-sm-3 col-form-label">
                        Preço:</label>
                    <div className="col-sm-9">
                        <input type="number"
                            value={preco}
                            onChange={setPreco}
                            className="form-control" id="preco" />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="categoria"
                        className="col-sm-3 col-form-label">Categoria:</label>
                    <div className="col-sm-9">
                        <select className="form-control" id="categoria" 
                            value={categoria}
                            onChange={setCategoria}>
                            <option>INFORMATICA</option>
                            <option>ENGENHARIA</option>
                            <option>ADMINISTRACAO</option>
                            <option>REDES</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <button
                        type='button'
                        onClick={() => salvar(id, codigo, descricao, cargaHoraria, preco, categoria)}
                        className="btn btn-primary ml-3 mb-3">
                        {id ? 'Alterar' : 'Adicionar'}
                    </button>
                    <button
                        type='button'
                        onClick={limpar}
                        className="btn btn-secondary ml-3 mb-3">
                        Limpar
                    </button>
                </div>
            </form>
        </div>
    );
}

const mapStoreToProps = store => ({
    codigo : store.cursos.codigo,
    descricao : store.cursos.descricao,
    cargaHoraria : store.cursos.cargaHoraria,
    preco : store.cursos.preco,
    categoria : store.cursos.categoria,
    id : store.cursos._id,
});

const mapActionsToProps = dispatch => bindActionCreators({
    setCodigo,
    setDescricao,
    setCargaHoraria,
    setPreco,
    setCategoria,
    limpar,
    salvar
}, dispatch);

const conectado = connect(mapStoreToProps, mapActionsToProps)(CursosFormulario);

export { conectado as CursosFormulario}