import React from 'react';
import { connect } from 'react-redux';

const ImageDisplay = ({ image, isFetch, err }) => {
    console.log(image);
    if (isFetch) {
        return (
            <div className="ui segment">
                <div className="ui active loader"></div>
                <p>Fetching Image</p>
            </div>
        );
    }
    return (
        <div>
            {image === null ? null : (
                <img
                    className="ui centered medium rounded spaced image"
                    src={image.urls.regular}
                    alt={image.alt_description}
                />
            )}
            <p>Description: {image.alt_description}</p>
            <a href={image.user.links.html}>Portfolio: {image.user.username}</a>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        image: state.image,
        isFetch: state.isFetch,
        err: state.err
    };
};
export default connect(mapStateToProps)(ImageDisplay);
