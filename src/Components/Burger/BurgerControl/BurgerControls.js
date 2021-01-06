import React from 'react' 
import BurgerControl from './BurgerControl/BurgerControl';
import classes from './BurgerControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const BurgerControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p> Price : <strong>{props.price.toFixed(2)}</strong></p>
            {
                controls.map((control) => 
                    <BurgerControl
                        key={control.type}
                        label={control.label}
                        added={() => props.addIngeridient(control.type)}
                        removed={() => props.removeIngeridient(control.type)}
                        disabled={props.disabled[control.type]}
                     />
                )
            }
             <button 
            className={classes.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.ordered}
            >ORDER NOW</button>
            
        </div>
    )
}

export default BurgerControls
