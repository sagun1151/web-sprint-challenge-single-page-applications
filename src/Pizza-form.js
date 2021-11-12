import React, { useState, useEffect } from 'react'
import { 
    useParams, 
    NavLink, 
    useRouteMatch,
    Route,
    Switch
  } from 'react-router-dom';
import * as yup from 'yup'
  
  const initialList = {
    name: '',
    size: '',
    sauce:'',
    special: '',
    bacon: '',
    pepperoni: '',
    ham:'',
    sausage:'',
    onion:'',
    olives:'',
    tomato:'',
    jalapeno:''
    
}
const initialErrors = {
    name: '',
    size: '',
    sauce:'',
    special: '',
    bacon: '',
    pepperoni: '',
    ham:'',
    sausage:'',
    onion:'',
    olives:'',
    tomato:'',
    jalapeno:''
    
}

const schema =yup.object().shape({
    name:yup
        .string().trim().required('name must be at least 2 characters'),
    
})

export default function PizzaForm(){

    const [pizzaList, stePizzaList] = useState([]);
    const [value, setValue] = useState(initialList)
    const [error, setError] = useState(initialErrors);

    const validate = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setError({...error, [name]:value}))
            .catch(err => setError({...error, [name]: err.errors[0]}))
    }
    
    const submit = () => {

    }

    const change = evt => {
        const { name, value, checked, type } = evt.target;
        const realValue = type === 'checkbox' ? checked : value;
        validate( name, realValue);
        setValue({...value , [name]: realValue});
    }

    return (
        <form id='pizza-form' onSubmit={submit}>
            <h2>Order Here</h2>
            <div className="form list">

                <label>
                    <input
                        id='name-input' 
                        name='name'
                        value={value.name}
                        type='text'
                        onChange={change}
                    />
                </label>

                <label>
                    <select value={value.size} name="size" onChange={change}>
                        <option value="">-- Select a Role --</option>
                        <option value="Student">Student</option>
                        <option value="Instructor">Instructor</option>
                        <option value="Alumni">Alumni</option>
                    </select>
                </label>



                
            </div>
        </form> 
        

    )


}  