import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'

import { getName } from '../Actions'

import { Image, CloudinaryContext } from 'cloudinary-react'

import genericProfilePic from '../genericprofilepic.png'

function Dashboard (props) {

    // componentDidMount() {
    //     const s = document.createElement('script')
    //     s.type = 'text/javascript'
    //     s.async = true
    //     s.src = 

    // }

    const [profilePic, setProfilePic] = useState(false)

    // cloudinary.setCloudName('')

    useEffect( () => {

        const userId = localStorage.getItem("user_id")
        
        props.getName(userId)

    }) 

    return (
        <div>
            <br></br><br></br>
            <h2>Welcome {props.first_name} {props.last_name}!</h2>
            <br></br><br></br>
            {profilePic ? 
            <Image cloudName='chaqar-bible-app' />
            : <img id="genericProfilePic" src={genericProfilePic}></img>
            }
        </div>
    )
}



const mapStateToProps = state => {

    return {
      first_name: state.first_name,
      last_name: state.last_name
    }
  
  }
  
  export default connect(mapStateToProps, {getName})(Dashboard)