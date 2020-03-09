import React from 'react'

import BurgerIngredient from './BurgerIngredients/BurgerIngredients'
import styles from './Burger.module.scss'

const burger = props =>{
    let transformedIng = Object.keys(props.ingredients)
        .map(ingKey=>[...Array(props.ingredients[ingKey])]
            .map((_,i)=><BurgerIngredient key={ingKey+i} type = {ingKey}/>)
        ).reduce((arr,el)=>(arr.concat(el)))
    if(transformedIng.length === 0)
        transformedIng = <p>Please Enter your ingredients</p>
    
    return(
     
        <div className={styles.Burger}> 
            <BurgerIngredient type = 'bread-top'/>
            {transformedIng}
            <BurgerIngredient type = 'bread-bottom'/>
        </div>
    )
}

export default burger 