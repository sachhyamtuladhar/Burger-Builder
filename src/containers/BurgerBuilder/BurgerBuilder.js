import React,{Component, Fragment} from 'react'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICES = {
    salad: 0.8,
    bacon: 1.5,
    cheese: 1,
    meat: 1.2  
}
class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0  
       },
       totPrice: 2,
       purchasable: false,
       purchasing: false
    }

    orderNow = () => {
        this.setState(state => ({purchasing: !state.purchasing}))
    }

    continueHandler = () => {
        alert("You Cuntinued!!!")
    }

    checkPurchasable = ing =>{
        const totItems = Object.values(ing).reduce((a,b)=>(a+b),0)
        console.log(totItems)
        this.setState({
            purchasable : totItems !== 0 
        })
    }

    addIngredientHandler = type => {
        const updatedIngredients = this.state.ingredients
        updatedIngredients[type]  = updatedIngredients[type] + 1
        const updatedPrice = this.state.totPrice + INGREDIENT_PRICES[type]
        this.setState({
            ingredients: updatedIngredients,
            totPrice: updatedPrice
        })
        this.checkPurchasable(updatedIngredients)
    }

    remIngredientHandler = type => {
        
        if (this.state.ingredients[type] === 0)
            return 
        const updatedIngredients = this.state.ingredients
        updatedIngredients[type]  = updatedIngredients[type] - 1
        const updatedPrice = this.state.totPrice - INGREDIENT_PRICES[type]
        this.setState({
            ingredients: updatedIngredients,
            totPrice: updatedPrice
        })
        this.checkPurchasable(updatedIngredients)
    }

    render(){
        const disableBtn = {...this.state.ingredients}
        for (const type in disableBtn){
            disableBtn[type] = disableBtn[type] <= 0
        }
        return(
            <Fragment>
                <Modal show={this.state.purchasing} close={this.orderNow}>
                    <OrderSummary 
                        ingredients={this.state.ingredients} 
                        continue={this.continueHandler}
                        close={this.orderNow}
                        price={this.state.totPrice}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredients={this.state.ingredients}
                    addIngredient={this.addIngredientHandler}
                    remIngredient={this.remIngredientHandler}
                    disableArr = {disableBtn}
                    price={this.state.totPrice}
                    isPurchasable={this.state.purchasable}
                    order={this.orderNow}
                />
            </Fragment>
        )
    }
}

export default  BurgerBuilder 