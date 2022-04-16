import React from 'react';

export const CursosFormulario = props => {

    const { 
        id,
        codigo,
        descricao,
        cargaHoraria,
        preco,
        categoria,

        isCodigoValido,

        alterarCodigo,
        setDescricao,
        setCargaHoraria,
        setPreco,
        setCategoria,

        limpar,
        salvarCurso
    
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
                            onChange={e => alterarCodigo(e.target.value)}
                            className="form-control mb-1" id="codigo" />
                        {!isCodigoValido && <span className='alert-danger mt'>Codigo tem que ser maior que 4</span>}
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
                            onChange={e => setDescricao(e.target.value)}
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
                            onChange={e => setCargaHoraria(e.target.value)}
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
                            onChange={e => setPreco(e.target.value)}
                            className="form-control" id="preco" />
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="categoria"
                        className="col-sm-3 col-form-label">Categoria:</label>
                    <div className="col-sm-9">
                        <select className="form-control" id="categoria" 
                            value={categoria}
                            onChange={e => setCategoria(e.target.value)}>
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
                        disabled={!isCodigoValido}
                        onClick={salvarCurso}
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