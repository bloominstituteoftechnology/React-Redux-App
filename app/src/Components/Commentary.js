import React, { useState, useEffect } from 'react'
// import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth'
import EditCommentary from './EditCommentary'
import { connect } from 'react-redux'



function Commentary (props) {

    const userId = localStorage.getItem("user_id")

    const initialCommentary = {
        user_id: userId,
        book: props.book,
        chapter: props.chapter,
        commentary: ''
    }

    


    const [theCommentary, setTheCommentary] = useState(initialCommentary)
    const [visibleCommentary, setVisibleCommentary] = useState([])
    
    const [showEditForm, setShowEditForm] = useState(false)

    // const history = useHistory()

    function handleChange(e) {

        setTheCommentary({
            ...theCommentary,
            [e.target.name]: e.target.value,
        })
    }

    

    const postCommentary = (e) => {
        e.preventDefault();
        axios
            .post("https://chaqar-data.herokuapp.com/commentary/", theCommentary)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.log(err))
        
        setTheCommentary({
            user_id: userId,
            book: props.book,
            chapter: props.chapter,
            commentary: ''
        })
    }

    useEffect( () => {

        const timer = setTimeout(() => {

            axiosWithAuth()
            .get(`https://chaqar-data.herokuapp.com/api/auth/${userId}/commentary`)
            .then((res) => {
                setVisibleCommentary(res.data)
                
            })

        }, 2000)

        return () => clearTimeout(timer) 

    }, [theCommentary, deleteCommentary]) 

    const filteredCommentary = visibleCommentary.filter(commentary => 
        commentary.book === props.book && commentary.chapter === props.chapter
        )
    
    
    
    function deleteCommentary (id) {

        axiosWithAuth() 
        .delete(`https://chaqar-data.herokuapp.com/commentary/${id}`)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })

    }

    return (
        <div>
            <br></br>
            <div id="pic-mycommentary">
                <img id="mycommentarypic" src={props.profile_pic_url}></img>
                <br></br>
                <h3 className="my-commentary-title">My Commentary:</h3>
            </div>
            <div>{filteredCommentary.map(commentary => 
                
                showEditForm ? 
                <EditCommentary setShowEditForm={setShowEditForm} key={commentary.id} commentary={commentary.commentary} commId={commentary.id} book={props.book} apibook={props.apibook} chapter={props.chapter} /> 
                : 
                <div className="roundedbox"> 
                <p className="commentary-text">{commentary.commentary}</p>
                <button onClick={() => setShowEditForm(true)}>Edit</button>
                <button onClick={() => deleteCommentary(commentary.id)}>Delete</button>
                </div>
            )}</div>
            <form onSubmit={postCommentary} id="commentary">
                <textarea 
                    name="commentary" 
                    form="commentary" 
                    value={theCommentary.commentary}
                    onChange={handleChange}>
                </textarea>
                <button id="bigbutton" type="submit">Save My Commentary</button>
                
            </form>
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
  
  export default connect(mapStateToProps, {})(Commentary)