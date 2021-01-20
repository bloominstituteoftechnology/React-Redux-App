import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import { getName } from '../Actions'

function Dashboard (props) {

    useEffect( () => {

        const userId = localStorage.getItem("user_id")
        console.log(userId)
        props.getName(userId)

    }) 

    return (
        <div>
            <br></br><br></br>
            <h2>Welcome {props.first_name} {props.last_name}!</h2>
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