import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const initialCommentary = {
    commentary: ''
}

function Commentary () {

    const [theCommentary, setTheCommentary] = useState(initialCommentary)

    const history = useHistory()

    function handleChange(e) {

        setTheCommentary({
            ...theCommentary,
            [e.target.name]: e.target.value,
        })
    }

    const postCommentary = (e) => {
        e.preventDefault();
        axios
            .post("", theCommentary)
            .then((res) => {
                console.log(res);
                history.push("/dashboard");
            })
            .catch((err) => console.log(err))
        
        setTheCommentary({
            commentary: ''
        })
    }

    return (
        <div>
            <br></br>
            <h3>My Commentary:</h3>
            <form onSubmit={postCommentary} id="commentary">
                <textarea 
                    name="commentary" 
                    form="commentary" 
                    value={theCommentary.commentary}
                    onChange={handleChange}>
                </textarea>
            </form>
        </div>
    )
}

export default Commentary