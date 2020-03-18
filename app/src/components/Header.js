import React from 'react';
import { connect } from "react-redux";

import { getComics } from "../actions/appActions";

const Header = props => {
    console.log(props);
    const handleGetComics = e => {
        e.preventDefault();
        props.getComics();
    }
    return (
        <>
            <h1>Arbitrary Selection of XKCD Strips</h1>
            {props.waiting && (
                <div>{props.waiting}</div>
            )}
            {props.error && (
                <div className="error">{props.error}</div>
            )}
            <button onClick={handleGetComics}>Add 5 random comics</button>
        </>
    );
};

const mapStateToProps = state => {
        return {
            waiting: state.waiting,
            error: state.error
        }
        // return {waiting:""}
    };

export default connect( mapStateToProps, { getComics })(Header);
