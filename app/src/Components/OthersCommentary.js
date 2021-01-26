import React, { useState, useEffect } from 'react'
// import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth'



function OthersCommentary (props) {

    const userId = localStorage.getItem("user_id")


    const [chapterCommentary, setChapterCommentary] = useState([])
    const [users, setUsers] = useState([])
    const [showCommentary, setShowCommentary] = useState(false)

    

    useEffect( () => {

            axiosWithAuth()
            .get(`https://chaqar-data.herokuapp.com/commentary/${props.book}/${props.chapter}`)
            .then((res) => {
                setChapterCommentary(res.data)
                console.log(res.data)
            })

            axiosWithAuth()
            .get('https://chaqar-data.herokuapp.com/api/auth')
            .then((res) => {
                setUsers(res.data)
            })

    }, [showCommentary]) 

    const filteredCommentary = chapterCommentary.filter(commentary => 
        commentary.user_id != userId
        )

    return (
        <div>
            
            <button id="bigbutton" onClick={() => {setShowCommentary(!showCommentary)}}>See What Others Are Saying</button>
            
            <div>{showCommentary ? filteredCommentary.map(commentary => 
                users.map(user => {
                    if (user.id === commentary.user_id) { 
                        return ( <div className="roundedbox"><p className="commentary-text">
                            <b>{user.first_name} {user.last_name} wrote:</b>
                        </p>
                        <p className="commentary-text">{commentary.commentary}</p>
                        </div>
                        )
                        }
                    }),
                    
                ) : null}</div>
            <br></br><br></br><br></br>
        </div>
    )
}

export default OthersCommentary