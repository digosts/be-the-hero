import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';
import './styles.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const histroy = useHistory();
  
  async function handleRegister(e){
    e.preventDefault();

    const data = {
      name,email, whatsapp, city, uf
    }

    try{
      const response = await api.post('ongs', data);

      alert('Cadastro realizado com sucesso!');
      histroy.push('/');
    }catch(e){
      alert('Erro ao tentar realizar o cadastro!');
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo"/>

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041"/>
            Já tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            placeholder="Nome da Ong"
            value={name}
            onChange={e=>setName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="E-mail"
            value={email}
            onChange={e=>setEmail(e.target.value)}
          />
          <input 
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e=>setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input 
              placeholder="Cidade"
              value={city}
              onChange={e=>setCity(e.target.value)}
            />
            <input 
              placeholder="UF" 
              value={uf}
              onChange={e=>setUf(e.target.value)}
              style={{width:80}}
            />
          </div>

          <button className="button">Registrar</button>
        </form>
      </div>
    </div>
  );
}
