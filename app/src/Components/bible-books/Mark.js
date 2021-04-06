import React from 'react'
import { Link } from 'react-router-dom'
// import { BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux'
import {
    getChapter

} from '../../Actions'


function Mark (props) {

    const markchapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    return (
        <div>
            <br></br><br></br><br></br>
            <h2>Mark</h2>

            <div className="bible-chapters-buttons">

            {markchapters.map(chapter =>
            <button onClick={() => {props.getChapter('mrk', `${chapter}`)}} className="bible-chapter-button"><Link className="link" to={`/mark${chapter}`}><h5>{chapter}</h5></Link></button>
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
  
  export default connect(mapStateToProps, {getChapter})(Mark)