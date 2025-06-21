import React, { useEffect, useState } from 'react'
import styles from '../Usuarios/Usuario.module.css'
import api from '../../services/api';

export default function Usuarios() {

const [usuarios, setUsuarios] = useState([]);
const [editando, setEdtitando] = useState(null);
const [form , setForm] = useState({nome: '', email: '', senha: '', role: ''});

const listarUsuarios = async () => {
    const res = await api.get("/usuario");
    setUsuarios(res.data);
};

useEffect(() => {
    listarUsuarios();
},[]);

const handleDelete = async (id) => {
    await api.delete(`/usuario/${id}`);
    listarUsuarios;
}

const handleEdit = (user) => {
    setEdtitando(user.id);
    setForm(user);
};

const handleSave = async () =>{
    await api.put(`/usuario/${editando}`, form);
    setEditando(null);
    setForm({nome:'', email: '', senha: '', role: ''});
    listarUsuarios();
}

return (
    <div className={styles.container}>
      <h2 className={styles.title}>Gerenciar Usuários</h2>
      <ul className={styles.userList}>
        {usuarios.map((user) => (
          <li key={user.id} className={styles.userItem}>
            {editando === user.id ? (
              <>
                <input
                  value={form.nome}
                  onChange={e => setForm({ ...form, nome: e.target.value })}
                  className={styles.input}
                />
                <input
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className={styles.input}
                />
                <input
                  value={form.senha}
                  onChange={e => setForm({ ...form, senha: e.target.value })}
                  className={styles.input}
                />
                <input
                  value={form.role}
                  onChange={e => setForm({ ...form, role: e.target.value })}
                  className={styles.input}
                />
                <button onClick={handleSave} className={styles.button}>
                  Salvar
                </button>
              </>
            ) : (
              <>
                <span>{user.nome} | {user.email} | {user.role}</span>
                <button onClick={() => handleEdit(user)} className={styles.button}>
                  Editar
                </button>
                <button onClick={() => handleDelete(user.id)} className={styles.buttonDelete}>
                  Excluir
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
