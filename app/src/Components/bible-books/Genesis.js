import React from 'react'
import { Link } from 'react-router-dom'
// import { BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux'
import {
    getChapter

} from '../../Actions'


function Genesis (props) {

    const genesischapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]

    return (
        <div>
            <br></br><br></br><br></br>
            <h2>Genesis</h2>

            <div className="bible-chapters-buttons">

            {genesischapters.map(chapter =>
            <button onClick={() => {props.getChapter('gen', `${chapter}`)}} className="bible-chapter-button"><Link className="link" to={`/genesis${chapter}`}><h5>{chapter}</h5></Link></button>
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
  
  export default connect(mapStateToProps, {getChapter})(Genesis)