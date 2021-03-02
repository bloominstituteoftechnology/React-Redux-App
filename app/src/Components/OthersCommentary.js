import React, { useState, useEffect } from 'react'
// import {useHistory} from 'react-router-dom'
import { axiosWithAuth } from '../axiosWithAuth'

import { connect } from 'react-redux'



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
            
            
            
            <div>{showCommentary ? 
                <div>
                <button id="bigbutton" onClick={() => {setShowCommentary(!showCommentary)}}>Hide What Others Are Saying</button>
                
                {filteredCommentary.map(commentary => 
                users.map(user => {
                    if (user.id === commentary.user_id) { 
                        return ( <div className="roundedbox"><p className="commentary-text">
                            <div>
                                {user.profile_pic_url != null ? 
                                <div><img id="smallprofilepic" src={user.profile_pic_url}></img>
                                <br></br>
                                </div>
                                : null}
                            <b>{user.first_name} {user.last_name} wrote:</b>
                            </div>
                        </p>
                        <p className="commentary-text">{commentary.commentary}</p>
                        </div>
                        )
                        }
                    }),
                    
                )}</div> : <button id="bigbutton" onClick={() => {setShowCommentary(!showCommentary)}}>See What Others Are Saying</button>}</div>
            <br></br><br></br><br></br>
                
        </div>
    )
}

const mapStateToProps = state => {

    return {
      first_name: state.first_name,
      last_name: state.last_name,
      profile_pic_url: state.profile_pic_url
    }
  
  }
  
  export default connect(mapStateToProps, {})(OthersCommentary)