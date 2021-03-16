import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { getName } from '../Actions'
import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth'

import genericProfilePic from '../genericprofilepic.png'




function EditProfile (props) {

    const [userId, setUserId] = useState('')


    useEffect( () => {

        

            setUserId(localStorage.getItem("user_id"))
            
            props.getName(userId)

        
        
    }) 

    const [updatedUser, setUpdatedUser] = useState(props.user)


    function handleChange(e) {

        setUpdatedUser({
            ...updatedUser,
            [e.target.name]: e.target.value,
        })
    }

    const saveProfile = (e) => {

        e.preventDefault();
        
        axiosWithAuth()
            .put(`https://chaqar-data.herokuapp.com/api/auth/${userId}`, updatedUser)
            .then(res => {
                console.log(res)
            })

          setUpdatedUser({
            first_name: props.user.first_name,
            last_name: props.user.last_name,
            city: props.user.city,
            state: props.user.state,
            country: props.user.country,
            bio: props.user.bio
          })


          props.setEditProfile(false)
        
         
      }; 


    

    return (
        <div>                          
            <form>
            <div class="roundedbox">
            <p class="profiletext">
            <label htmlFor="first_name"><b>Name:</b></label>
                <br></br> 
                <input
                    id="first_name"
                    type="text"
                    name="first_name"
                    value={updatedUser.first_name}
                    onChange={handleChange}
                    editable={true}> 
                </input>
                <br></br> 
                <input
                    
                    type="text"
                    name="last_name"
                    value={updatedUser.last_name}
                    onChange={handleChange}> 
                </input>
            </p>
            </div>
            <div class="roundedbox">
            <p class="profiletext">
                <b>Location:</b>
                <br></br>
                <input
                    id="city"
                    type="text"
                    name="city"
                    value={updatedUser.city}
                    placeholder="City"
                    onChange={handleChange}> 
                </input>
                <br></br>
                <input
                    id="state"
                    type="text"
                    name="state"
                    value={updatedUser.state}
                    placeholder="State"
                    onChange={handleChange}> 
                </input> 
                <br></br>
                <input
                    id="country"
                    type="text"
                    name="country"
                    value={updatedUser.country}
                    placeholder="Country"
                    onChange={handleChange}> 
                </input>
            </p>
            </div>
            <div class="roundedbox">
            <p class="profiletext">
                <b>Bio:</b>
                <br></br> 
                <textarea
                    id="bio"
                    type="text"
                    name="bio"
                    value={updatedUser.bio}
                    onChange={handleChange}
                />
            </p>
            </div>
            <button onClick={saveProfile}>Save Profile Information</button>
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
  
  export default connect(mapStateToProps, {getName})(EditProfile)