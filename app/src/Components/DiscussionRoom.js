import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Link, Route, useHistory } from 'react-router-dom'

import { getName } from '../Actions'

import axios from 'axios'




function DiscussionRoom (props) {

    

    return (
        <div id={props.bg}>
            <br></br><br></br>
            <h2 id={props.titleid}>{props.title}</h2>
            <h4 id={props.subtitleid}>Discussion Room</h4>

            <div id="discussion-room-container">
                <div id="startconversationbox">
                <h3 id="startconversation">Start a Conversation</h3>
                </div>
            </div>

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
  
  export default connect(mapStateToProps, {})(DiscussionRoom)