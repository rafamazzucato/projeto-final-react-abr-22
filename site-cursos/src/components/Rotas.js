import React from 'react';
import {Route, Routes} from 'react-router-dom'
import { ContatoHome } from '../pages/contato/ContatoHome';
import { CursosHome } from '../pages/cursos/CursosHome';
import { Home } from '../pages/home/Home';

export const Rotas = () => {
    return (
        <Routes>
            <Route path='/cursos' element={<CursosHome />} />
            <Route path='/contato' element={<ContatoHome />} />
            <Route path='*' element={<Home />} />
        </Routes>
    );
}