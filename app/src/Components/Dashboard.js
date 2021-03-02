import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { getName } from '../Actions'
import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth'

import genericProfilePic from '../genericprofilepic.png'


const userId = localStorage.getItem("user_id")


export const uploadProfilePic = () => dispatch => {

    // e.preventDefault()

    const { files } = document.querySelector('input[type="file"]')
        const formData = new FormData()
        formData.append('file', files[0])
        formData.append('upload_preset', 'ipbfll99')
        // const options = {
        //     method: 'POST',
        //     body: formData,
        // }

        axios
            .post('https://api.Cloudinary.com/v1_1/chaqar-bible-app/image/upload', formData)
            
            .then(res => {
                console.log(res.data)
                axiosWithAuth()
                    .put(`https://chaqar-data.herokuapp.com/api/auth/${userId}`, {profile_pic_url: res.data.secure_url}) 
                    .then(user => 
                        dispatch({
                            type: SET_PROFILE_PIC,
                            payload: user.data.profile_pic_url})
                        )

                
            })
            .catch(err => console.log(err))   

}

export const getProfilePic = () => dispatch => {

    useEffect( () => {

            axiosWithAuth()
            .get(`https://chaqar-data.herokuapp.com/api/auth/${userId}`)
            .then((res) => {
                dispatch({
                    type: GET_PROFILE_PIC,
                    payload: res.data.profile_pic_url}
                    )
                
                
            })        

    }, []) 

}


function Dashboard (props) {

    props.getProfilePic()



    useEffect( () => {

        const userId = localStorage.getItem("user_id")
        
        props.getName(userId)
        

    }) 

    

    return (
        <div>
            <br></br><br></br>
            <h2>Welcome {props.first_name} {props.last_name}!</h2>
            <br></br><br></br>
            {console.log(props.profile_pic_url)}
            {props.profile_pic_url != '' ? 
            <img src={props.profile_pic_url} className="profilepic"></img>
            : <img id="genericProfilePic" src={genericProfilePic}></img>
            }
            <form>
                <input type="file"/><br></br>
                <button type="button" className="btn" onClick={props.uploadProfilePic}>Submit</button>
                {/* <button type="button" className="btn widget-btn">Upload Via Widget</button> */}
            </form>
        </div>
    )
}

export const SET_PROFILE_PIC = 'SET_PROFILE_PIC'
export const GET_PROFILE_PIC = 'GET_PROFILE_PIC'

const mapStateToProps = state => {

    return {
      first_name: state.first_name,
      last_name: state.last_name,
      profile_pic_url: state.profile_pic_url,
      profile_pic_alt: state.profile_pic_alt
    }
  
  }
  
  export default connect(mapStateToProps, {getName, uploadProfilePic, getProfilePic})(Dashboard)