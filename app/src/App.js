import React, {useEffect} from 'react';
import {Route, Switch, NavLink} from 'react-router-dom'
import ProductsList from './component/products'
import './App.css';
import CardProduct from './component/cardProduct';
import { connect } from 'react-redux'
import { fetchProducts } from './action/index'
import Home from './component/home'
import MaybelineProduct from './component/Maybeline'


function App(props) {
  
  console.log(props)

  useEffect(() => {
      props.fetchProducts();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="app-header-child">
          <div className="header">
            <h3 className="rainbow-text">Make up TrippleP Store</h3>
          </div>
          <NavLink className="home" to="/">home</NavLink>
          <NavLink className="home" to="/product">Product store</NavLink>
          <NavLink className="home" to="/maybeline">Maybeline Product</NavLink>
          </div>
      </header>
      
      <div>
      <Switch> 
        <Route path='/maybeline/:itemId'>
            <CardProduct addToCart={props.addToCart} product={props.product}/>
        </Route>

        <Route path='/product/:itemId'>
          <CardProduct product={props.product}/>
        </Route>

        <Route exact path="/product">
            <ProductsList product={props.product} />
        </Route>

        <Route path="/maybeline">
          <MaybelineProduct />
        </Route>

        <Route path="/">
          <Home />
        </Route>   

      </Switch>  
      </div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
      loading: state.loading,
      product: state.product,  
      error: state.error,
  } 

}
export default connect(
  mapStateToProps,
  { fetchProducts }
)(App);
