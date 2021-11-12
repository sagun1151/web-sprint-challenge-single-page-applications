import React, { useState, useEffect }from "react";
import { Link, Route, Switch } from 'react-router-dom';
import PizzaForm from "./Pizza-form";

const App = () => {

  return (
    <div className='top'>
      <nav>
        <h1>Lambda Eats</h1>
        <Link to='/'>Home</Link>
        <Link id='order-pizza' to='/pizza'>Order</Link>
      </nav>

      <Switch>
        <Route path ="/pizza">
          <PizzaForm />
        </Route>
        
      </Switch>
      
      
    </div>
  );
};
export default App;
