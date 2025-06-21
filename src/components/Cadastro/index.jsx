import React, { useState } from 'react'
import api from '../../services/api';
import styles from './Cadastro.module.css';

export default function Cadastro() {

    const [usuario, setUsuario] = useState({nome: '', email: '', senha: '', role: ''});

    const handleChange = (e) => {
        setUsuario({...usuario, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await api.post("/usuario",usuario);
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            alert("Error ao cadastrar usuário.");
            console.error(error);
        }
    };


  return (
    <div className={styles.container}>
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit}>
            <input name='nome' placeholder='Nome' onChange={handleChange} required className={styles.input}/>
            <input name='email' placeholder='Email' onChange={handleChange} required className={styles.input}/>
            <input name='senha' placeholder='Senha' onChange={handleChange} required className={styles.input}/>
            <input name='role' placeholder='função(ex: ADMIN, USER' onChange={handleChange} required className={styles.input}/>
            <button type='submit' className={styles.button}>Cadastrar</button>
        </form>
    </div>
  )
}
