import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Link, Route, useHistory } from 'react-router-dom'

import { getName } from '../Actions'

import axios from 'axios'




function DiscussionRoom (props) {

    

    return (
        <div id="torahapplications-bg">
            <br></br><br></br>
            <h2 id="torahappications-title">{props.title}</h2>
            <h4 id="torahapplications-subtitle">Discussion Room</h4>

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