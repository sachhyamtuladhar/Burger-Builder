import React from 'react'
import styles from './BuildControl.module.scss'

const buildControl = props => {
    return(
        <div className = {styles.BuildControl}>
            <div className = {styles.Label}>
                {props.ingredient}
            </div>
            <button className = {styles.More}>Increase</button>
            {props.amount}
            <button className = {styles.Less}>Decrease</button>
        </div>
    )
}

export default buildControl