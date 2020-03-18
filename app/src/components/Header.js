import React from 'react';
import { connect } from "react-redux";

import { getComics } from "../actions/appActions";

const Header = props => {
    const handleGetComics = e => {
        e.preventDefault();
        props.getComics();
    }
    return (
        <>
            <h1>Random List of XKCD Comics</h1>
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

const mapStateToProps = state => ({
        waiting: state.waiting,
        error: state.error
    });

export default connect( mapStateToProps, { getComics })(Header);
