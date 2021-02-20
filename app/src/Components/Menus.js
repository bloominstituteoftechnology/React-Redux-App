import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link, Route, useHistory } from 'react-router-dom'
import { setLoggedIn } from '../Actions'
import { connect } from 'react-redux'


function Menus(props) {

    

    const history = useHistory()
    

    const logout = () => {
      localStorage.clear('token');
      localStorage.clear('user_id')
      props.setLoggedIn()
      history.push('/')
    }

return (
     <>  
    <div>
    <nav>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/bible'>Read</Link></li>
        {props.loggedIn ?
        <li><Link to='/' onClick={logout}>Logout</Link></li>
        :
        <li><Link to='/login'>Login</Link></li>
        }
    </ul>
</nav>
{props.loggedIn ? 
    <div id="loggedInMenu">
    <ul>
      <li><Link to='/dashboard'>Dashboard</Link></li>
      <li><Link to='/profile'>My Profile</Link></li>
      <li><Link to='/theforum'>The Forum</Link></li>
    </ul>
  </div>
  :
    null
}
</div></>
)

}

const mapStateToProps = state => {

    return {
      first_name: state.first_name,
      last_name: state.last_name,
      loggedIn: state.loggedIn,
    }
  
  }
  
  export default connect(mapStateToProps, {setLoggedIn})(Menus)