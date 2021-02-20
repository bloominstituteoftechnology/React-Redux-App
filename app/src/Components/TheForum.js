import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'

import { getName } from '../Actions'

import axios from 'axios'




function TheForum (props) {

    

    return (
        <div>
            <br></br><br></br>
            <h2>Enter a Discussion Room...</h2>
            <br></br><br></br>
            <div id="torahapplications-button">
                <h3 id="discussionroombuttontitle">Torah Applications</h3>
            </div>
            <div id="celebratingfeasts-button">
                <h3 id="discussionroombuttontitle">Celebrating the Feasts of Yahweh</h3>
            </div>
            <div id="historicalbiblebooks-button">
                <h3 id="discussionroombuttontitle">The Historical Bible Books</h3>
            </div>
            <div id="ketuvim-thewritings-button">
                <h3 id="discussionroombuttontitle">Ketuvim: The Writings</h3>
            </div>
            <div id="messianicprophecy-button">
                <h3 id="discussionroombuttontitle">Messianic Prophecy</h3>
            </div>
            <div id="followingyeshua-button">
                <h3 id="discussionroombuttontitle">Following Yeshua</h3>
            </div>
            <div id="whatisthegospel-button">
                <h3 id="discussionroombuttontitle">What is the Gospel?</h3>
            </div>
            <div id="allthingspaul-button">
                <h3 id="discussionroombuttontitle">All Things Paul</h3>
            </div>
            <div id="israel-button">
                <h3 id="discussionroombuttontitle">Israel</h3>
            </div>
            <div id="endtimesprophecy-button">
                <h3 id="discussionroombuttontitle">End Times Prophecy</h3>
            </div>
            <div id="thelifetocome-button">
                <h3 id="discussionroombuttontitle">The Life To Come</h3>
            </div>
            <div id="prayerroom-button">
                <h3 id="discussionroombuttontitle">Prayer Room</h3>
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
  
  export default connect(mapStateToProps, {})(TheForum)