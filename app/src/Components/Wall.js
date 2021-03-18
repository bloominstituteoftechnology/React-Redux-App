import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth'
import { Link, Route, useHistory, useParams } from 'react-router-dom'




export default function Wall(props) {


    const [users, setUsers] = useState([])

    const { name } = useParams()

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
            <h3>{props.user.first_name}'s Wall</h3>
        </div>
    )
}