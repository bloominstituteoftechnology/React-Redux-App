import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { getName } from '../Actions'
import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth'
import EditProfile from './EditProfile'

import genericProfilePic from '../genericprofilepic.png'





export const uploadProfilePic = () => dispatch => {

    const userId = localStorage.getItem("user_id")
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
            
            // https://api.Cloudinary.com/v1_1/chaqar-bible-app/image/upload
            
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

export const getProfilePic = (userId) => dispatch => {


            axiosWithAuth()
            .get(`https://chaqar-data.herokuapp.com/api/auth/${userId}`)
            .then((res) => {
                dispatch({
                    type: GET_PROFILE_PIC,
                    payload: res.data.profile_pic_url}
                    )   
            })        

}


function MyProfile (props) {

    const [userId, setUserId] = useState('')

    const [users, setUsers] = useState([])

    const [editProfile, setEditProfile] = useState(false)

    props.getProfilePic(userId)

    useEffect( () => {

        const timer = setTimeout(() => {

            setUserId(localStorage.getItem("user_id"))
            
            props.getName(userId)

            

            axiosWithAuth()
            .get('https://chaqar-data.herokuapp.com/api/auth')
            .then((res) => {
                setUsers(res.data)
            })
        
        }, 1200)

        return () => clearTimeout(timer) 
        
        
    }, [editProfile]) 

    

    

    return (
        <div>
            <br></br><br></br>
            <h2>My Profile</h2>
            <br></br><br></br>
            {console.log(props.profile_pic_url)}
            {props.profile_pic_url != null ? 
            <img src={props.profile_pic_url} className="profilepic"></img>
            : <img id="genericProfilePic" src={genericProfilePic}></img>
            }
            <form>
                <input type="file"/><br></br>
                <button type="button" className="btn" onClick={props.uploadProfilePic}>Submit</button>
                {/* <button type="button" className="btn widget-btn">Upload Via Widget</button> */}
            </form>
            <br></br>
            {users.map(user => { 
                if (JSON.stringify(user.id) === userId) {
                    return(
                        editProfile ? 
                            <EditProfile user={user} setEditProfile={setEditProfile} />
                            :
                        <div>
                            <div class="roundedbox">
                            <p class="profiletext">
                                <b>Name:</b>
                                <br></br> 
                                {user.first_name} {user.last_name}
                            </p>
                            </div>
                            <div class="roundedbox">
                            <p class="profiletext">
                                <b>Location:</b>
                                <br></br> 
                                {user.city}, {user.state}, {user.country}
                            </p>
                            </div>
                            <div class="roundedbox">
                            <p class="profiletext">
                                <b>Bio:</b>
                                <br></br> 
                                <p class="commentary-text">{user.bio}</p>
                            </p>
                            </div>
                            <button onClick={() => setEditProfile(true)}>Edit Profile</button>
                        </div>
                        
                    )
                }
            })}
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
  
  export default connect(mapStateToProps, {getName, uploadProfilePic, getProfilePic})(MyProfile)