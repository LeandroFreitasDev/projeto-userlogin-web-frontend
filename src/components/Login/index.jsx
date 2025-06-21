import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../Login/Login.module.css'

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, senha });
    };


    return (
        <div className={styles.container}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required className={styles.input} />
                <input type='password' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} required className={styles.input} />
                <button type='submit' className={styles.button}>Entrar</button>
            </form>
            <p className={styles.text}>Não tem uma conta? <Link to={"/cadastro"}>Cadastre-se aqui!</Link></p>
        </div>
    )
}
