import React from 'react'
import styles from '../Header/Header.module.css'
import Navbar from '../Navbar'




export default function Header() {
    return (
        <header className={styles.header}>
            <Navbar />
         </header>
    )
}
