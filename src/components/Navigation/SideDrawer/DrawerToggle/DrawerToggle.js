import React from 'react'
import styles from './DrawerToggle.module.scss'

const DrawerToggle = props => {
    return (
        <div onClick={props.toggleSide} className={styles.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default DrawerToggle
