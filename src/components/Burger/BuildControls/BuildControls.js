import React from 'react'
import styles from './BuildControl.module.scss'
import BuildControl from './BuildControl/BuildControl'

const buildControls = props => {
    let controls = Object.keys(props.ingredients).map(ing=>(<BuildControl key={ing+props.ingredients[ing]} ingredient={ing} amount={props.ingredients[ing]}/>))
    return (
        <div className = {styles.BuildControls}>
             {controls}
        </div>
    )
}

export default buildControls