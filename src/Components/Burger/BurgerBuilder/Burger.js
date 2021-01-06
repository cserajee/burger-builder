import React from 'react'
import BurgerIngredient from './BrugerIngredient/BurgerIngredient'
import classes from "./Burger.module.css"

const burger = (props) => {
    let burgetIngredient = Object.keys(props.ingredient).map( ikey => {
        return [...Array(props.ingredient[ikey])].map((_,i)=> {
            return <BurgerIngredient type={ikey} key={ikey + i} />;
        }) 
    }).reduce( (arr, el) => arr.concat(el) ,[]);
    if(burgetIngredient.length === 0) burgetIngredient= <p>Please add ingredients...</p>;
    return (
        <div className={classes.Burger}>
        <BurgerIngredient type="bread-top" />
        {burgetIngredient}
        <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger
