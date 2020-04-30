import React, {useEffect} from "react";
import { Image, Dimmer, Loader } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchPexelImage } from "../store/actions/pexelsAction";

function PexelsImage(props) {
    useEffect(() => {
        props.fetchPexelImage()
    },[])
    console.log("%c PEXELIMAGE", "color:yellow", props)
  return (
    <>
      {props.isImageLoading ? (
        <Dimmer active>
          <Loader>Loading...</Loader>
        </Dimmer>
      ) : (
        <div>
          <Image src={props.cityImage} alt={props.altImageInfo} />
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cityImage: state.masterReducer.cityImage,
    altImageInfo: state.masterReducer.altImageInfo,
    isImageLoading: state.masterReducer.isImageLoading,
  };
};

export default connect(mapStateToProps, { fetchPexelImage })(PexelsImage);
