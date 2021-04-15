import React from 'react'
import { Link } from 'react-router-dom'
// import { BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux'
import {
    getChapter

} from '../../Actions'


function John (props) {

    const johnchapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]

    return (
        <div>
            <br></br><br></br><br></br>
            <h2>John</h2>

            <div className="bible-chapters-buttons">

            {johnchapters.map(chapter =>
            <button onClick={() => {props.getChapter('jhn', `${chapter}`)}} className="bible-chapter-button"><Link className="link" to={`/john${chapter}`}><h5>{chapter}</h5></Link></button>
            )}
            </div>

        </div>

    )

}




const mapStateToProps = state => {

    return {
      chapter: state.chapter,
      error: state.error
    }
  
  }
  
  export default connect(mapStateToProps, {getChapter})(John)