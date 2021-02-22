import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Link, Route, useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../axiosWithAuth'

import { getName } from '../Actions'

import AddComment from './AddComment'

import axios from 'axios'




function DiscussionRoom (props) {

    const history = useHistory()

    const userId = localStorage.getItem("user_id")

    const starterpost = {
        user_id: userId,
        discussion_room: props.discussionroom,
        post: ''
        }
        
    const [post, setPost] = useState(starterpost)


    function handleEditChange(e) {

        setPost({
            ...post,
            [e.target.name]: e.target.value,
        })
    }


    function postThePost (e) {

        e.preventDefault()

        axiosWithAuth() 
        .post(`https://chaqar-data.herokuapp.com/posts`, post)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
        console.log(err)
        })

        setPost({
            user_id: userId,
            discussion_room: props.discussionroom,
            post: ''
        })


    }

    const [visiblePosts, setVisiblePosts] = useState([])

    const [users, setUsers] = useState([])

    const [comments, setComments] = useState([])

    useEffect( () => {

        // const timer = setTimeout(() => {

            axiosWithAuth()
            .get(`https://chaqar-data.herokuapp.com/posts`)
            .then((res) => {
                setVisiblePosts(res.data)
                
            })

            axiosWithAuth()
            .get(`https://chaqar-data.herokuapp.com/comments-on-posts`)
            .then((res) => {
                setComments(res.data)
                
            })

            axiosWithAuth()
            .get('https://chaqar-data.herokuapp.com/api/auth')
            .then((res) => {
                setUsers(res.data)
            })

        // }, 2000)

        // return () => clearTimeout(timer) 

    }, [postThePost])


    const filteredPosts = visiblePosts.filter(post => 
        post.discussion_room === props.discussionroom
        )

    const [viewAddComment, setViewAddComment] = useState(false)

    

    return (
        <div id={props.bg}>
            <br></br><br></br>
            <h2 id={props.titleid}>{props.title}</h2>
            <h4 id={props.subtitleid}>Discussion Room</h4>

            <div id="discussion-room-container">
                <div id="discussionroom-box">
                    <div id="startconversationbox">
                        <h3 id="startconversation">Start a Conversation</h3>
                        <form onSubmit={postThePost} id="postform">
                            <textarea
                                name="post" 
                                form="postform" 
                                value={post.post}
                                onChange={handleEditChange}>
                            </textarea>
                            <button id="submit" type="submit">Post</button>
                        </form>
                    </div>
                    <div>
                    {filteredPosts.map(post => 
                        users.map(user => {
                            if (user.id === post.user_id) {
                                return (<div id="post"><p className="commentary-text">
                                    <b>{user.first_name} {user.last_name} Wrote:</b></p>
                                    <p className="commentary-text">{post.post}</p>
                                    {!viewAddComment ?
                                    <button onClick={() => setViewAddComment(true)}>Respond</button>
                                    :
                                    <AddComment setViewAddComment={setViewAddComment} post_id={post.id} discussionroom={post.discussion_room} />
                                    }
                                    <div id="comments">
                                        <br></br><br></br>
                                        <h4 id={props.subtitleid}>Comments</h4>
                                        {comments.map(comment =>

                                            <div>
                                                <p className="commentary-text"><b>{user.first_name} {user.last_name} Responded:</b></p>
                                                <p className="commentary-text">{comment.comment}</p></div>
                                            )}    
                                    </div>
                                    </div>
                                    )
                            }
                        })
                       )}
                    </div>
                </div>
            </div>

        </div>)
}

const mapStateToProps = state => {

    return {
      first_name: state.first_name,
      last_name: state.last_name,
      profile_pic_url: state.profile_pic_url,
      profile_pic_alt: state.profile_pic_alt
    }
  
  }
  
  export default connect(mapStateToProps, {})(DiscussionRoom)