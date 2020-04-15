import React from 'react'
import { connect } from 'react-redux';
import { fetchData } from "../actions"
const Header = props => {

    return (
        <div className="container notification is-bold is-dark">
            <h1 className="title">RanDino</h1>
            <h2 className="subtitle">Click on the button to learn about a random Dinosaur!</h2>
            <button className="button is-success" onClick={() => props.fetchData(props.dinoInfo) }>Get Dinosaur!</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dinoInfo: state.dinoInfo
    }
};

export default connect(mapStateToProps, {fetchData})(Header);