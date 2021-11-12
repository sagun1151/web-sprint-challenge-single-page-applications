import React from "react";

export default function OrderPage( { details } ) {

    if(!details){
        return <h3>no pizza yet...</h3>
    }

    return (
        <div className='pizza-order'>
            <h2>Your Order</h2>
            <p>Name: {details.name}</p>
            <p>Size: {details.size}</p>
            
            {details.bacon||details.pepperoni||details.ham||details.sausage||details.onion||details.olives||details.tomato||details.jalapeno ? <p>Toppings:</p> : ''}
            
            {details.bacon ? <p>Bacon</p> : null}
            {details.pepperoni ? <p>Pepperoni</p> : null}
            {details.ham ? <p>Ham</p> : null}
            {details.sausage ? <p>Sausage</p> : null}
            {details.onion ? <p>Onion</p> : null}
            {details.olives ? <p>Olives</p> : null}
            {details.tomato ? <p>Tomato</p> : null}
            {details.jalapeno ? <p>Jalapeno</p> : null}

            <p>Special Instructions: {details.special}</p>

        </div>
    )
}