import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import { setLoggedIn } from '../Actions'
import { connect } from 'react-redux'

const initialLogin = {
    email: '',
    password: ''
}



function Login (props) {

    const [user, setUser] = useState(initialLogin)

    const history = useHistory()


    function handleChange(e) {

        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }


    function login (e)  {
        e.preventDefault();
        axios
          .post("https://chaqar-data.herokuapp.com/api/auth/login", user)
          .then((res) => {
            
            localStorage.setItem("token", JSON.stringify(res.data.token));
            localStorage.setItem("user_id", res.data.user_id)
            props.setLoggedIn()
            history.push("/dashboard");
          })
          .catch((err) => console.log(err));

          setUser({
              email: '',
              password: '' 
          })
          
      };
   
    return (
        <div>
            <br></br><br></br><br></br>
            <h2>Login</h2>
            <form onSubmit={login}>
                <input
                    required
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    />
                <br></br>
                <input
                    required
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    />
                <br></br>
                <button id="login" type="submit">Login</button>
            </form>

            <p id="noaccount">Don't have an account yet?
                <br></br>
                <Link className="link" to='/register'><h5>Register Here</h5></Link>
            </p>
        </div>
    )
}

const mapStateToProps = state => {

    return {
      first_name: state.first_name,
      last_name: state.last_name,
      loggedIn: state.loggedIn
    }
  
  }
  
  export default connect(mapStateToProps, {setLoggedIn})(Login)