import React, { Component } from 'react'
import Burger from '../Components/Burger/BurgerBuilder/Burger'
import BurgerControls from '../Components/Burger/BurgerControl/BurgerControls'
import Aux from '../hoc/AuxHOC'
import Modal from '../Components/UI/Modal/Modal';
import OrderSummary from '../Components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

export class BurgerContainer extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese:0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }
    updatePurchaseHandler = (purchaseIng) => { 
        const sum = Object.keys(purchaseIng).map((pkey) => {
            return purchaseIng[pkey]
        }).reduce((sum,el)=> { return  sum + el } , 0);
        this.setState({purchasable : sum > 0 });
    }
    addIngeridientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const totalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updateCount;
        this.setState({totalPrice : totalPrice, ingredients: updatedIngredients });
        this.updatePurchaseHandler(updatedIngredients);

    }
    removeIngeridientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount < 1) return;
        const updateCount = oldCount - 1;
        const totalPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updateCount;
        this.setState({totalPrice: totalPrice, ingredients: updatedIngredients });
        this.updatePurchaseHandler(updatedIngredients);
    }
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert("your order continued...");
    }

    render() {
        const disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
            
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredient={this.state.ingredients} />
                <BurgerControls 
                addIngeridient= {this.addIngeridientHandler}
                removeIngeridient= {this.removeIngeridientHandler}
                disabled= {disabledInfo}
                price= {this.state.totalPrice}
                ordered={this.purchaseHandler}
                purchasable = {this.state.purchasable} />
            </Aux>
        )
    }
}

export default BurgerContainer
