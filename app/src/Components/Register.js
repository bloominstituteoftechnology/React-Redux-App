import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const initialRegister = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
}



function Register () {

    const [newUser, setNewUser] = useState(initialRegister)

    const history = useHistory()


    function handleChange(e) {

        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        })
    }


    const registerAndLogin = (e) => {
        e.preventDefault();
        axios
          .post("https://chaqar-data.herokuapp.com/api/auth/register", newUser)
          .then((res) => {
            localStorage.setItem("token", JSON.stringify(res.data.token))
            localStorage.setItem("user_id", res.data.user_id)
            history.push("/dashboard");
          })
          .catch((err) => console.log(err));

          setNewUser({
              first_name: '',
              last_name: '',
              email: '',
              password: '' 
          })
          
      };
   
    return (
        <div>
            <br></br><br></br><br></br>
            <h2>Register</h2>
            <form onSubmit={registerAndLogin}>
                <input
                    required
                    id="first-name"
                    name="first_name"
                    type="text"
                    placeholder="First Name"
                    value={newUser.first_name}
                    onChange={handleChange}
                    />
                    <br></br>
                <input
                    required
                    id="last-name"
                    name="last_name"
                    type="text"
                    placeholder="Last Name"
                    value={newUser.last_name}
                    onChange={handleChange}
                    />
                    <br></br>
                <input
                    required
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={handleChange}
                    />
                <br></br>
                <input
                    required
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={newUser.password}
                    onChange={handleChange}
                    />
                <br></br>
                <button id="login" type="submit">Register & Login</button>
            </form>

        </div>
    )
}

export default Register