import React from 'react'
import Aux from '../../../hoc/AuxHOC'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(ikey => {
        return <li key={ikey}><span style={{textTransform : 'capitalize'}}>{ikey} </span>: {props.ingredients[ikey]} </li>;
    })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
             <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button> 
        </Aux>
    )
}

export default orderSummary
