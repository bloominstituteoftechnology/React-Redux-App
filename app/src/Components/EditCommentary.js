import React, { useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { axiosWithAuth } from '../axiosWithAuth'



function EditCommentary (props) {

    const history = useHistory()

    const userId = localStorage.getItem("user_id")

    const commentaryToEdit = {
        user_id: userId,
        book: props.book,
        chapter: props.chapter,
        commentary: props.commentary
        }
        
    const [editedCommentary, setEditedCommentary] = useState(commentaryToEdit)


    function handleEditChange(e) {

        setEditedCommentary({
            ...editedCommentary,
            [e.target.name]: e.target.value,
        })
    }

    function editCommentary () {

        axiosWithAuth() 
        .put(`https://chaqar-data.herokuapp.com/commentary/${props.id}`, editedCommentary)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
           console.log(err)
        })

        history.push(`/${props.book}${props.chapter}`)

    }

    return (
        <div className="roundedbox">
            <br></br>
            <form onSubmit={editCommentary} id="editcommentaryform">
                <textarea className="edittext"
                    name="commentary" 
                    form="editcommentaryform" 
                    value={editedCommentary.commentary}
                    onChange={handleEditChange}>
                </textarea>
                <button id="bigbutton" type="submit">Save My Commentary</button>
                <br></br><br></br>
            </form>
        </div>
    )

}

export default EditCommentary