import React, { useEffect, useState } from 'react';
import '../App.css';
import { Link, Route, useHistory } from 'react-router-dom'
import { setLoggedIn } from '../Actions'
import { connect } from 'react-redux'


const hide = { 
    display: { display: 'none'}
}


function Music(props) {

    

    const history = useHistory()

    const [hideMusic, setHideMusic] = useState(false)
    


return (
     <>  
    <div id="music">
    <iframe id={hideMusic ? "iframeclosed" : "iframeopen"} src="https://messianicradio.com/" />
    {hideMusic ?
    <div className="brownbar"><button onClick={() => setHideMusic(false) } class="brownbuttonlink">Show Music</button></div>
    :
    <div className="brownbar"><button onClick={() => setHideMusic(true) } class="brownbuttonlink">Hide Music</button></div>
    }
    </div></>
)

}

const mapStateToProps = state => {

    return {
      first_name: state.first_name,
      last_name: state.last_name,
      loggedIn: state.loggedIn,
    }
  
  }
  
  export default connect(mapStateToProps, {setLoggedIn})(Music)