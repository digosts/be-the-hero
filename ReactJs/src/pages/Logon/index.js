import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';
import herosImg from '../../assets/heroes.png';

export default function Logon() {
  const [id, setId] = useState('');
  const histroy = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try{
      const response = await api.post('session', {id});
      
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      histroy.push('/profile');
    }catch(e){
      alert('Erro ao tentar realizar o login!');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Logo"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <input 
            placeholder="Sua Id"
            value={id}
            onChange={e=>setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041"/>
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={herosImg} alt="Heroes"/>
    </div>
  );
}
