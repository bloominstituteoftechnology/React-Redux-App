import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Link, Route, useHistory } from 'react-router-dom'

import { getName } from '../Actions'

import axios from 'axios'






function Video (props) {

    

    return (
        <div class="video">
            <h4>{props.name}</h4>
            <br></br>
            <iframe width="80%" height="250" 
            src={props.url}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
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
  
  export default connect(mapStateToProps, {})(Video)