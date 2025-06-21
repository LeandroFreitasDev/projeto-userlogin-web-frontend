import HomePage from '../pages/Home'
import UsuariosPage from '../pages/Usuarios'
import LoginPage from '../pages/Login'
import { Route, Routes } from 'react-router-dom'
import CadastroPage from '../pages/Cadastro'

export default function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/usuarios" element={<UsuariosPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/cadastro" element={<CadastroPage />}></Route>
    </Routes>
  )
}
