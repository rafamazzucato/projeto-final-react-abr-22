
import React, { useEffect, useState } from 'react';
import { Cabecalho } from '../../components/Cabecalho';
import { CursosFormulario } from '../../components/cursos/Formulario';
import { CursosListagem } from '../../components/cursos/Listagem';
import axios from 'axios';
import Swal from 'sweetalert2';

const URL = 'http://localhost:3200/api/cursos';

export const CursosHome = () => {

    const [cursos, setCursos] = useState([]);
    const [codigo, setCodigo] = useState(0);
    const [id, setId] = useState('');
    const [isCodigoValido, setIsCodigoValido] = useState(true);
    const [descricao, setDescricao] = useState('');
    const [cargaHoraria, setCargaHoraria] = useState(4);
    const [preco, setPreco] = useState(0);
    const [categoria, setCategoria] = useState('ADMINISTRACAO');

    const alterarCodigo = codigo => {
        setCodigo(codigo);
        if(codigo > 4){
            return setIsCodigoValido(true);
        }
        setIsCodigoValido(false);
    }


    const getCursos = async () => {
        try {
            const response = await axios.get(URL);
            if (response && response.data) {
                setCursos(response.data);
            }
        } catch (e) {
            console.log('Ocorreu erro ao listar cursos.', e);
        }
    }

    useEffect(() => {
        getCursos();
    }, []);

    const confirmarExclusao = (curso) => {  
        Swal.fire({
            title: `Você deseja realmente excluir o curso ${curso.codigo} selecionado?`,
            showCancelButton: true,
            confirmButtonText: 'Excluir',
            cancelButtonText: `Cancelar`,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try{
                    await axios.delete(URL+'/'+ curso._id);
                    await getCursos();
                    Swal.fire('Curso excluído com sucesso!', '', 'success');
                }catch(e){
                    console.log(e);
                    Swal.fire('Não foi possível excluir curso!', '', 'error');
                }
                
            }
        });
    }

    const selecionarCurso = curso =>{
        setId(curso._id);
        setCodigo(curso.codigo);
        setDescricao(curso.descricao);
        setCargaHoraria(curso.cargaHoraria);
        setPreco(curso.preco);
        setCategoria(curso.categoria);
    }

    const limpar = ()=>{
        setId('');
        setCodigo(0);
        setDescricao('');
        setCargaHoraria(4);
        setPreco(0);
        setCategoria('ADMINISTRACAO');
    }

    const salvarCurso = async () => {
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
            
            await getCursos();
            limpar();
            Swal.fire(`Curso ${id ? 'alterado' : 'adicionado'} com sucesso!`, '', 'success');
        }catch(e){
            console.log(e);
            Swal.fire('Não foi possível adicionar curso!', '', 'error');
        }
    }




    return (
        <div className='container'>
            <Cabecalho titulo="Cursos" subtitulo="cadastro de cursos" />
            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursosFormulario 
                        codigo={codigo}
                        descricao={descricao}
                        cargaHoraria={cargaHoraria}
                        preco={preco}
                        categoria={categoria}
                        id={id}

                        isCodigoValido={isCodigoValido}

                        alterarCodigo={alterarCodigo}
                        setDescricao={setDescricao}
                        setCargaHoraria={setCargaHoraria}
                        setPreco={setPreco}
                        setCategoria={setCategoria}

                        limpar={limpar}
                        salvarCurso={salvarCurso}
                    />
                </div>
                <div className="col-md-6">
                    <CursosListagem 
                        cursos={cursos}
                        confirmarExclusao={confirmarExclusao}
                        selecionarCurso={selecionarCurso} />
                </div>
            </div>
        </div>
    )
}