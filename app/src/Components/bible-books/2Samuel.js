import React from 'react'
import { Link } from 'react-router-dom'
// import { BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux'
import {
    getChapter

} from '../../Actions'


function SecondSamuel (props) {

    const secondsamuelchapters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
  
    return (
        <div>
            <br></br><br></br><br></br>
            <h2>1 Samuel</h2>

            <div className="bible-chapters-buttons">

            {secondsamuelchapters.map(chapter =>
            <button onClick={() => {props.getChapter('2sa', `${chapter}`)}} className="bible-chapter-button"><Link className="link" to={`/2samuel${chapter}`}><h5>{chapter}</h5></Link></button>
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
  
  export default connect(mapStateToProps, {getChapter})(SecondSamuel)