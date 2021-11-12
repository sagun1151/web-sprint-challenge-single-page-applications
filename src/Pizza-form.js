import React, { useState, useEffect } from 'react'
import { 
    useParams, 
    NavLink, 
    useRouteMatch,
    Route,
    Switch
  } from 'react-router-dom';

export default function PizzaForm(props){
    const {
        values,
        submit,
        change,
        errors
    } = props;
    
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <h2>Order Here</h2>
            <div className="form list">
            <div>{errors.name}</div>

                <label>Name
                    <input
                        id='name-input'
                        type='text' 
                        name='name'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>

                <label>What size sauce <div>{errors.sauce}</div>
                    <select  id ='size-dropdown' value={values.size} name="size" onChange={onChange}>
                        <option value="">-- Select a size --</option>
                        <option value="small">Small</option>
                        <option value="med">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </label>

                <div>
                    <label>Bacon
                        <input 
                            type='checkbox'
                            name='bacon'
                            onChange={onChange}
                            checked={values.bacon}
                        />
                    </label>
                    <label>Pepperoni
                        <input 
                            type='checkbox'
                            name='pepperoni'
                            onChange={onChange}
                            checked={values.pepperoni}
                        />
                    </label>
                    <label>Ham
                        <input 
                            type='checkbox'
                            name='ham'
                            onChange={onChange}
                            checked={values.ham}
                        />
                    </label>
                    <label>Sausage
                        <input 
                            type='checkbox'
                            name='sausage'
                            onChange={onChange}
                            checked={values.sausage}
                        />
                    </label>
                    <label>Onion
                        <input 
                            type='checkbox'
                            name='onion'
                            onChange={onChange}
                            checked={values.onion}
                        />
                    </label>
                    <label>Olives
                        <input 
                            type='checkbox'
                            name='olives'
                            onChange={onChange}
                            checked={values.olives}
                        />
                    </label>
                    <label>Tomato
                        <input 
                            type='checkbox'
                            name='tomato'
                            onChange={onChange}
                            checked={values.tomato}
                        />
                    </label>
                    <label>Jalapeno
                        <input 
                            type='checkbox'
                            name='jalapeno'
                            onChange={onChange}
                            checked={values.jalapeno}
                        />
                    </label>
                </div>
                
                <label>Special Instructions
                    <input
                        id='special-text'
                        type='text'
                        name='special'
                        value={values.special}
                        onChange={onChange}
                    />
                </label>
                <button>Order Up</button>
            </div>
        </form> 
        

    )


}  