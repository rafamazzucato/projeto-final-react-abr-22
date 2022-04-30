
import React from 'react';
import { CursosListagem } from '../../components/cursos/Listagem';

export const Home = () => {
    return (
        <div className='container'>
            <CursosListagem isAdmin={false} />
        </div>
    );
}