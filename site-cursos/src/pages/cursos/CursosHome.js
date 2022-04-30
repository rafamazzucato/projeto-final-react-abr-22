
import React from 'react';
import { Cabecalho } from '../../components/Cabecalho';
import { CursosFormulario } from '../../components/cursos/Formulario';
import { CursosListagem } from '../../components/cursos/Listagem';

export const CursosHome = () => {
    return (
        <div className='container'>
            <Cabecalho titulo="Cursos" subtitulo="cadastro de cursos" />
            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursosFormulario />
                </div>
                <div className="col-md-6">
                    <CursosListagem isAdmin={true} />
                </div>
            </div>
        </div>
    )
}