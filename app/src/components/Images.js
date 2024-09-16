import React from "react";
import { connect } from "react-redux";
import { Row } from "reactstrap";

import Image from "./Image";

const Images = (props) => {
  const images = props.data.links && props.data.links.flickr_images;

  console.log(images);
  return (
    <div>
      <Row>
        {/* {images.map((image, index) => {
          return <Image image={image} key={index} />;
        })} */}
      </Row>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.reducer.data,
  };
};

export default connect(mapStateToProps, {})(Images);