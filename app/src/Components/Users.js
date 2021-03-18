import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth'
import { Link, Route, useHistory } from 'react-router-dom'

const locationStyle = {
    fontSize: '18px',
    fontFamily: 'Hebrew',
    marginTop: '0px'
}

const bioStyle = {
    fontSize: '12px',
    fontFamily: 'Hebrew'
}

const userInfo = {

    textAlign: 'left'

}


export default function Users() {

    const [users, setUsers] = useState([])

    useEffect( () => {

        axiosWithAuth()
            .get('https://chaqar-data.herokuapp.com/api/auth')
            .then(res => {
                setUsers(res.data)
            })
    
    })


    return (
        <div>
            <br></br><br></br>
            <h3>The Community</h3>
            {users.map(user => 
                <div className="user">
                    <div><img className="user-pic" src={user.profile_pic_url}></img></div>
                    <div>
                        <p className="user-name">{user.first_name} {user.last_name}</p>
                        <p style={locationStyle}>{user.city}, {user.state}, {user.country}</p>
                        <p style={bioStyle}>{user.bio}</p>
                        <div className="smallbrownbutton">
                            <Link class="smallbrownbuttonlink" to={`/${user.first_name}${user.last_name}`}>{user.first_name}'s Wall</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}