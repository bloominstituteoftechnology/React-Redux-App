import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'

const initialLogin = {
    email: '',
    password: ''
}



function Login () {

    const [user, setUser] = useState(initialLogin)

    const history = useHistory()


    function handleChange(e) {

        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }


    const login = (e) => {
        e.preventDefault();
        axios
          .post("https://chaqar-data.herokuapp.com/api/auth/login", user)
          .then((res) => {
            console.log(res.data.user_id);
            localStorage.setItem("token", JSON.stringify(res.data.token));
            localStorage.setItem("user_id", res.data.user_id)
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

export default Login