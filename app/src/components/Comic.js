import React from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";

const Comic = (props) => {
    const {comicInfo} = props;
    const { img, alt, safe_title, transcript, num, month, year, day } = comicInfo;

    const renderComic = () => {
        return (
            <>
                {/* <h2>Title: {safe_title}</h2> */}
                <div className = 'comicPanel'>
                    <div className = 'comicPanelText'>
                        <h2>XKCD Comic #{num}</h2>
                        <h2>Title: {safe_title}</h2>
                        <p>Date: {month}/{day}/{year} </p>
                    </div>
                    <img src = {img} alt = {alt} /> 
                </div>
                <div className = "transcript">
                    <h3>Transcript:</h3>
                    {transcript ? <p>{transcript}</p> : <p>No transcript available for this comic</p>}
                </div>
            </>
        )
    }

    const renderLoader = () => {
        return (
          <>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={155}
              width={115}
              timeout={30000} //3 secs
            />
          </>
        );
      };

    return (
        <div className = 'fullComic'>
            {props.isLoading ? renderLoader() : renderComic()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      isLoading: state.isLoading
    };
  };
  
  export default connect(mapStateToProps, {})(Comic);

//<img src = {props.comic.img} alt = {props.comic.alt} />