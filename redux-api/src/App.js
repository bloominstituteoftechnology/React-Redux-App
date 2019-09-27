import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Cats from './components/cats'
import {fetchCats} from './actions/index';
import {connect} from 'react-redux';



 

class App extends Component{

  componentDidMount(){
    this.props.fetchCats()

  }
   
   render(){
    console.log('APP PROPS', this.props)

  return (
    <div className="App">
      <header className="App-header">
         
       <Cats/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}}

const mapStateToProps = state => {
  return {
    cats: state.cats
  }
}
 
export default connect (
  mapStateToProps,
   {fetchCats}
)(App)
