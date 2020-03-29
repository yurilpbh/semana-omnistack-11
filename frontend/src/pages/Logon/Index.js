import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; //Evita que carregue todo o react novamente e só troca a Rota
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css';

import heroesIMG from '../../assets/heroes.png'
import logoIMG from '../../assets/logo.svg'

export default function Logon(){
    const [id, setID] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefaul();

        try{
            const response = await api.post('sessions', { id });

            localStorage.setItem('ondID', id);
            localStorage.setItem('ognName', response.data.name);
        
            history.push('/profile');
        } catch(err){
            alert('Falha no Login, tente novamente.')
        }
    }

    return (
        <div className="logon-containter">
            <section className="form">
                <img src={logoIMG} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    
                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setID(e.target.value)}
                    />
                    <button className="button" typer="submit">Entrar</button>

                    <Link className=".back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesIMG} alt="Heroes" className="src"/>
        </div>
    );
}