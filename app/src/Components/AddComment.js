import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import { axiosWithAuth } from '../axiosWithAuth'

import {connect} from 'react-redux'
import {getChapter} from '../Actions'



function AddComment (props) {

    const history = useHistory()

    const userId = localStorage.getItem("user_id")

    const starterComment = {
        user_id: userId,
        post_id: props.post_id,
        discussion_room: props.discussionroom,
        comment: ''
        }
        
    const [comment, setComment] = useState(starterComment)


    function handleEditChange(e) {

        setComment({
            ...comment,
            [e.target.name]: e.target.value,
        })
    }


    function postComment (e) {

        e.preventDefault()

        axiosWithAuth() 
        .post(`https://chaqar-data.herokuapp.com/comments-on-posts`, comment)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
        console.log(err)
        })


        props.setViewAddComment(false)

        // history.push();

    }

    return (
        <div className="addCommentBox">
            <br></br>
            <form onSubmit={postComment} id="postcommentform">
                <textarea className="addComment"
                    name="comment" 
                    form="postcommentform" 
                    value={comment.comment}
                    onChange={handleEditChange}>
                </textarea>
                <button id="bigbutton" type="submit">Post Comment</button>
                <br></br><br></br>
            </form>
                <button id="bigbutton" onClick={() => props.setViewAddComment(false)}>Cancel</button>
        </div>
    )

}


const mapStateToProps = state => {

    return {
      first_name: state.first_name,
      last_name: state.last_name
    }
  
}

export default connect(mapStateToProps, {getChapter})(AddComment)