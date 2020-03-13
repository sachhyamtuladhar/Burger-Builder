import React from 'react'
import styles from './BackDrop.module.scss'

const BackDrop = props => {
    return props.show ? <div className={styles.BackDrop} onClick={props.close}></div> : null
}

export default BackDrop
