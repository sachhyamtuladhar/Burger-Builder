import React,{Fragment} from 'react'
import Button from '../../UI/Button/Button'

const OrderSummary = props => {
    const ingredientSum = Object.keys(props.ingredients)
        .map(ingKey=>(
        <li key={ingKey}><span style={{textTransform: "capitalize"}}>{ingKey}: {props.ingredients[ingKey]}</span></li>
        ))
    return (
        <Fragment>
            <h3>Order Now!!!</h3>
            <p>A delicious burger with content:</p>
            <ul>
                {ingredientSum}
            </ul>
            <p><strong>Price: ${props.price.toFixed(2)}</strong></p>
            <Button type="Danger" click={props.close}>Cancel</Button>
            <Button type="Success" click={props.continue}>Continue</Button>
        </Fragment>
    )
}


export default OrderSummary