import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Link, Route, useHistory } from 'react-router-dom'

import Video from './Video'

import { getName } from '../Actions'

import axios from 'axios'


const videos = [
    {
     name: 'Basics of the Torah',
     url: 'https://www.youtube.com/embed/7e-z1R62FtI'
    }
] 




function Videos (props) {

    

    return (
        <div>
            <br></br><br></br>
            <h2>Video Teachings</h2>
            <br></br><br></br>
            {videos.map(video => {
                return <Video name={video.name} url={video.url} />
            })}
            

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
  
  export default connect(mapStateToProps, {})(Videos)