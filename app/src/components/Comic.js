import React from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";

const Comic = (props) => {
    const {comicInfo} = props;
    const { img, alt, safe_title } = comicInfo;

    const renderComic = () => {
        return (
            <>
                <h3>Title: {safe_title}</h3>
                <img src = {img} alt = {alt} />
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
        <div>
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