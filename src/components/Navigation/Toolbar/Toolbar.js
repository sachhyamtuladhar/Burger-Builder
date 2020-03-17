import React from 'react'
import styles from './Toolbar.module.scss'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'


const Toolbar = props =>  (
    <header className={styles.Toolbar}>
        <DrawerToggle toggleSide={props.toggleSide}/>
        <div className={styles.Logo}>
            <Logo />
        </div>
        <nav  className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)


export default Toolbar