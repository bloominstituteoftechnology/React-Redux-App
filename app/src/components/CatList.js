import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const CatList = (props) => {
  return (
    <div className='container'>
      <div className='row'>
        {images.map((image) => {
          return (
            <div
              key={image.id}
              className='col-md-4'
              style={{ marginBottom: "2rem" }}
            >
              <div className='imageList__container'>
                <img
                  className='imageList__image'
                  src={image.largeImageURL}
                  alt={image.tags}
                />
              </div>
              <div className='image__details'>
                <Link
                  to={{
                    pathname: `/image/${image.id}`,
                    state: { image },
                  }}
                >
                  <button>View</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    //     <>
    //       {props.error ? (
    //         <div className='error'>{props.error}</div>
    //       ) : (
    //         props.images.map((image) => (
    //           <div key={image.id} className='imageList-container'>
    //             <img
    //               className='imageList__image'
    //               src={image.largeImageURL}
    //               alt={image.tags}
    //             />
    // <div className="image__details">
    //               <Link to={{
    //                   pathname: `/image/${image.id}`,
    //                   state: { image }
    //                 }}><button>View</button></Link>

    //           </div>
    //         ))
    //       )}
    //     </>
  );
};

const mapStateToProps = (state) => {
  return {
    imagess: state.images,
    error: state.error,
  };
};

export default connect(mapStateToProps, {})(CatList);
