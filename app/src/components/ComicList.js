import React from 'react';
import { connect } from "react-redux";

import Comic from "./Comic";

const ComicList = props => {
    return (
        <div className="comics-list">
            {props.comics.map(item => (
                <Comic comic={item} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        comics: state.comics
    }
}

export default connect( mapStateToProps, {})(ComicList);