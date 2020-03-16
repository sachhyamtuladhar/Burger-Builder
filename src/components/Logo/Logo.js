import React from 'react'
import burgerLogo from '../../assets/images/burger-logo.png'
import styles from './Logo.module.scss'

const Logo = () =>  (
    <div className={styles.Logo}>
        <img src={burgerLogo} alt="logo"></img>
    </div>
)

export default Logo 