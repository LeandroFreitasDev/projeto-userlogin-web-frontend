import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Navbar/Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
        <div className={styles.links}>
            <Link to={"/"} className={styles.link}>Home</Link>
        </div>
        <div className={styles.links}>
            <Link to={"/usuarios"} className={styles.link}>Usuários</Link>
        </div>
        <div className={styles.links}>
            <Link to={"/login"} className={styles.link}>Login</Link>
        </div>
    </nav>
  )
}
