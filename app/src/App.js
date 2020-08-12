import React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import {getScripture} from './Actions'


function App(props) {


  console.log(props.content)

  return (
    <div className="App">
      <header>
    <div id="title-subtitle">
        <h1>חקר : Bible App</h1>
        <h3>Search, Study, Meditate</h3>
    </div>
</header>
<nav>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/john1'>Read!</Link></li>
    </ul>
</nav>
<Route exact path='/'>
<section id="about">
    <p>Welcome to <b>Chaqar</b>: a Bible app for studying and more!  Here you can search the scriptures
    for particular words or phrases, and then once you've found what you're interested in, you can call up
    resources like word studies and commentaries to help you understand the scripture even better!  And then,
you can meditate on all this and write your prayerful thoughts down to be saved in the web app under your account.</p>
</section>
</Route>

<Route path='/john1'>

    <div>
      <button onClick={() => {props.getScripture()}}><h2>Click to Read John 1</h2></button>
      <div className='bible-text' dangerouslySetInnerHTML={{__html: props.content}} />
    </div>

</Route>

    </div>
  );
}

const mapStateToProps = state => {

  return {
    content: state.content
  }

}

export default connect(mapStateToProps, {getScripture})(App)
