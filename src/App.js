import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './componets/Navbar';
import ProductList from './componets/ProductList';
import Cart from './componets/cart/Cart';
import Details from './componets/Details';
import Defaults from './componets/Default';
import Modal from './componets/Modal'

class App extends Component{
  render (){
  return (
    <React.Fragment>
      <Navbar />
        <Switch >
          <Route exact path="/" component ={ProductList} /> 
          <Route path="/details" component ={Details} /> 
          <Route path="/cart" component ={Cart} /> 
          <Route component ={Defaults} /> 
        </Switch>
        <Modal />
    </React.Fragment>
    )
  }
}

export default App;
