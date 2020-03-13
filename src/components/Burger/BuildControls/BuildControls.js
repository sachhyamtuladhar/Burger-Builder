import React from 'react'
import styles from './BuildControls.module.scss'
import BuildControl from './BuildControl/BuildControl'

const buildControls = props => {
    let controls = Object.keys(props.ingredients).map(
        ing=>(<BuildControl 
            key={ing+props.ingredients[ing]} 
            ingredient={ing} 
            amount={props.ingredients[ing]}
            remItem={()=>props.remIngredient(ing)}
            addItem={()=>props.addIngredient(ing)}
            disable = {props.disableArr[ing]}
        />)
    )
    return (
        <div className = {styles.BuildControls}>
            <p>Current Price: <strong>$ {props.price.toFixed(2)}</strong></p>
             {controls}
             <button className={styles.OrderButton} disabled={!props.isPurchasable} onClick={props.order}>ORDER NOW!</button>
        </div>
    )
}

export default buildControls