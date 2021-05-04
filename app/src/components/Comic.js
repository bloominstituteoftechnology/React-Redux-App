import React from 'react';
import { connect } from "react-redux";

import { deleteComic } from "../actions/appActions";

const Comic = props => {
    console.log(props);
    const handleDeleteComic = e => {
        e.preventDefault();
        props.deleteComic(props.comic.num);
    };
    return (
        <div className="comic-box">
            <h2>{props.comic.safe_title}</h2>
            <img className="com-img" src={props.comic.img} alt={props.comic.alt} title={props.comic.alt}/>
            <button onClick={handleDeleteComic}>Delete</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        error: state.error
    }
};

export default connect( mapStateToProps, { deleteComic })(Comic);