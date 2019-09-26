import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Cats from './components/cats'
import {fetchCats} from './actions/index';
import {connect} from 'react-redux';



function App(){
  return (
    <div className= 'Cat'>
      <h1>Hello Cats!</h1>
      <Cats/>
    </div>
  )
}

export default App;

// class App extends Component{
//   state = {
//     cats:[]
//   }

//   render(){
//   return (
//     <div className="App">
//       <header className="App-header">
         
//        <Cats/>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }}

// const mapStateToProps = state => {
//   return {
//     cats: state.cats
//   }
// }
// // export default App;

// export default connect (
//   mapStateToProps,
//    {fetchCats}
// )(App)
