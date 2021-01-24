import React, { useState, useEffect } from 'react'
// import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth'



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
                console.log(res.data)
            })

        }, 2000)

        return () => clearTimeout(timer) 

    }, [theCommentary]) 

    const filteredCommentary = visibleCommentary.filter(commentary => 
        commentary.book === props.book && commentary.chapter === props.chapter
        )

    return (
        <div>
            <br></br>
            <h3 className="my-commentary-title">My Commentary:</h3>
            <div>{filteredCommentary.map(commentary => 
                <p className="commentary-text">{commentary.commentary}</p>
            )}</div>
            <form onSubmit={postCommentary} id="commentary">
                <textarea 
                    name="commentary" 
                    form="commentary" 
                    value={theCommentary.commentary}
                    onChange={handleChange}>
                </textarea>
                <button id="save" type="submit">Save My Commentary</button>
                <br></br>
            </form>
        </div>
    )
}

export default Commentary