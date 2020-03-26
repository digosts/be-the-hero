import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';
import './styles.css';

export default function NewIncident() {
  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);

  async function handleForm(e){
    e.preventDefault();

    const data ={
      title, description, value
    }
    
    try{
      await api.post('incidents', data, {
        headers:{
          Authorization: ongId,
        }
      });

      alert('Incidente cadastrado com sucesso.');
      history.push('/profile');
    }catch(e){
      alert('Erro ao cadastrar incidente!');
    }
  }
  
  return (
    <div className="new-incident">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso para cadastro.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para o home
          </Link>
        </section>

        <form onSubmit={handleForm}>
          <input 
            placeholder="Título do cado"
            value={title}
            onChange={e=>setTitle(e.target.value)}
            />
          <textarea 
            placeholder="Descrição"
            value={description}
            onChange={e=>setDescription(e.target.value)}
            />
          <input 
            placeholder="Valor em reais"
            value={value}
            onChange={e=>setValue(e.target.value)}
            />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
