import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { getName } from '../Actions'
import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth'
import { Link, Route, useHistory } from 'react-router-dom'

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


function Dashboard (props) {

    const [userId, setUserId] = useState('')
    const [greeting, setGreeting] = useState('')
    const [weekGreeting, setWeekGreeting] = useState('')
    const [almostShabbat, setAlmostShabbat] = useState(false)

    const date = new Date()
    const hour = date.getHours()
    const day = date.getDay()

    console.log(day, hour)


    


    useEffect( () => {

        

            setUserId(localStorage.getItem("user_id"))
            
            props.getName(userId)

            props.getProfilePic(userId)

            function pickGreeting() {
            if (hour >= 5 && hour < 12) {
                return setGreeting('Good Morning')
            }
            if (hour >= 12 && hour < 17) {
                return setGreeting('Good Afternoon')
            }
            if (hour >= 17 && hour < 22) {
                return setGreeting('Good Evening')
            }
            else {
                return setGreeting('Night Greetings')
            }
            }

            function shabbat_shavua() {
                if ((day < 5 && day > 0) || (day === 5 && hour < 18) || (day === 0 && hour >= 18)) {
                    return setWeekGreeting(`It's a weekday. May Yahweh fill your week with purpose and peace until you enter His rest on the blessed Sabbath day!`)
                }
                if ((day === 5 && hour >= 18) || (day === 6 && hour < 18)) {
                    return setWeekGreeting(`It's the Sabbath today! Shabbat Shalom! - שבת שלום - or... Sabbath Peace to you!`)
                }
                if ((day === 6 && hour >= 18) || (day === 0 && hour < 18)) {
                    return setWeekGreeting(`A new fresh week has started! Shavua Tov! -  שבוע טוב - or... Have a good week!`)
                }
            }

            if ((day === 4) || (day === 5 && hour < 18)) {
                setAlmostShabbat(true)
            }

        pickGreeting()
        shabbat_shavua()
        
        
    }) 

    

    return (
        <div>
            <br></br><br></br>
            <h2>{greeting} {props.first_name} {props.last_name}!</h2>
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
            <div class="notification">{weekGreeting}</div>
            <br></br>
            {almostShabbat ? <div class="yellownotification">It's almost... SHABBAT!!!</div> : null}
            <br></br>
            <p class="mediumtext">See who else is studying with you in...</p>
            <div className="brownroundbutton"><Link class="brownbuttonlink" to='/users'>The Community</Link></div>
            <br></br><br></br>
            <p class="mediumtext">Want to be inspired and more greatly filled with the Spirit as you study God's word?
            Why not listen to some devotional background music as you study?</p>
            <div className="brownroundbutton"><button onClick={() => props.setMusicDisplayed(true)} class="brownbuttonlink">Play Music</button></div>
            <br></br><br></br>
            <p class="mediumtext">Learn more about the scriptures and how they apply to us with...</p>
            <div className="brownroundbutton"><Link class="brownbuttonlink" to='/videos'>Video Teachings</Link></div>
            <br></br>
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