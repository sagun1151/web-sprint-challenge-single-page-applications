import React, { useState, useEffect }from "react";
import { Link, Route, Switch } from 'react-router-dom';
import PizzaForm from "./Pizza-form";
import schema from './formSchema'
import * as yup from 'yup';
import axios from "axios";

const initialList = {
  name: '',
  size: '',
  sauce:'',
  special: '',
  bacon: false,
  pepperoni: false,
  ham:false,
  sausage:false,
  onion:false,
  olives:false,
  tomato:false,
  jalapeno:false
  
}
const initialErrors = {
  name: '',
  size: '',
  sauce:'',
  special: '',    
}

const App = () => {

  const [pizzaList, stePizzaList] = useState([]);
  const [value, setValue] = useState(initialList)
  const [error, setError] = useState(initialErrors);

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
        .then(() => setError({...error, [name]:''}))
        .catch(err => setError({...error, [name]: err.errors[0]}))
}

const post = pizza => {
  axios.post('https://reqres.in/api/orders')
    .then(res => {
      stePizzaList([res.data, ...pizzaList]);
    })
    .catch(err => console.error(err))
    .finally(()=> setValue(initialList));
}

const submit = () => {
  const newPizza = {
      name: value.name,
      size: value.size,
      sauce:value.sauce,
      special: value.special,
      bacon: value.bacon,
      pepperoni: value.pepperoni,
      ham:value.ham,
      sausage:value.sausage,
      onion:value.onion,
      olives:value.olives,
      tomato:value.tomato,
      jalapeno:value.jalapeno
    }
  post(newPizza)
}

const change = (name, data) => {
    validate(name, data);
    setValue({...value , [name]: data});
}


  return (
    <div className='top'>
      <nav>
        <h1>Lambda Eats</h1>
        <div className='links'>
        <Link to='/'>Home</Link>
        <Link id='order-pizza' to='/pizza'>Order</Link>
        </div>
      </nav>

      <Switch>
        <Route path ="/pizza">
          <PizzaForm 
            values={value}
            submit={submit}
            change={change}
            errors={error}
          />
        </Route>
        
      </Switch>
      
      
    </div>
  );
};
export default App;
