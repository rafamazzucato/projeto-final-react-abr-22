
import React, {useState, useEffect} from 'react';
import { CursosListagem } from '../../components/cursos/Listagem';
import axios from 'axios';

const URL = 'http://localhost:3200/api/cursos';

export const Home = () => {

    const [cursos, setCursos] = useState([]);

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

    return (
        <div className='container'>
            <CursosListagem cursos={cursos} />
        </div>
    )
}