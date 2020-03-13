import React from 'react'
import styles from './BuildControl.module.scss'


const buildControl = props => {
    return(
        <div className = {styles.BuildControl}>
            <div className = {styles.Label} >
                {props.ingredient}
            </div>
            <button className = {styles.Less} onClick={props.remItem} disabled={props.disable}>Decrease</button>
            {props.amount}
            <button className = {styles.More} onClick={props.addItem}>Increase</button>
        </div>
    )
}

export default buildControl