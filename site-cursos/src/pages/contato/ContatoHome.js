import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Cabecalho } from '../../components/Cabecalho';
import Swal from 'sweetalert2';
import axios from 'axios';
import {
    setData,
    setNome,
    setEmail,
    setAssunto,
    limpar
} from '../../store/actions/contato';

const URL = 'http://localhost:3200/api/contatos'

const ContatoHome = props => {
    const {data, nome, email, assunto} = props;
    const {setData, setNome, setEmail, setAssunto, limpar} = props;

    const adicionarContato = async () => {
        try{
            const erros = []
            if(!data){
                erros.push('Data não informada ou inválida');
            }

            if(!nome || nome.length < 2){
                erros.push('Nome não informada ou inválida');
            }

            if(!email || email.length < 6){
                erros.push('Email não informado ou inválido');
            }

            if(!assunto || assunto.length < 6){
                erros.push('Assunto não informado ou inválido');
            }

            if(erros && erros.length > 0){
                Swal.fire('Erro de validação!', erros.join('<br/>'), 'info');
                return;
            }

            const body = {
                data,
                nome,
                email,
                assunto
            };

            await axios.post(URL, body);
            limpar();
            Swal.fire(`Contato enviado com sucesso!`, '', 'success');
        }catch(e){
            console.log(e);
            Swal.fire('Não foi possível adicionar curso!', '', 'error');
        }
    }

    return (
        <div className='container'>
            <Cabecalho titulo="Contato" subtitulo="envie sua mensagem" />
            <div>
                <h3>Formulário</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="data"
                            className="col-sm-3 col-form-label">Data:</label>
                        <div className="col-sm-5 col-6">
                            <input type="date"
                                className="form-control" id="data"
                                value={data}
                                onChange={setData} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nome"
                            className="col-sm-3 col-form-label">Nome:</label>
                        <div className="col-sm-9">
                            <input type="text"
                                className="form-control" id="nome"
                                value={nome}
                                onChange={setNome} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email"
                            className="col-sm-3 col-form-label">Email:</label>
                        <div className="col-sm-9">
                            <input type="email"
                                className="form-control" id="email"
                                value={email}
                                onChange={setEmail} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="assunto"
                            className="col-sm-3 col-form-label">Assunto:</label>
                        <div className="col-sm-9">
                            <textarea className="form-control"
                                id="assunto" rows="5"
                                value={assunto}
                                onChange={setAssunto} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <button 
                            type='button'
                            className="btn btn-primary ml-3 mb-3"
                            onClick={adicionarContato}>
                            Adicionar
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
        </div>
    );
}

const mapStoreToProps = store => ({
    data: store.contato.data,
    nome: store.contato.nome,
    email: store.contato.email,
    assunto: store.contato.assunto
});

const mapActionsToProps = dispatch => bindActionCreators({
    setData,
    setNome,
    setEmail,
    setAssunto,
    limpar
}, dispatch);

const conectado = connect(mapStoreToProps, mapActionsToProps)(ContatoHome);
export{ conectado as ContatoHome }