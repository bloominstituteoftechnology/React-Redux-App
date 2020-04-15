import React from 'react'
import { connect } from 'react-redux';
import { fetchData } from "../actions"
const Header = props => {

    return (
        <div>
            <h1>RanDino</h1>
            <h2>Click on the button to learn about a random Dinosaur!</h2>
            <button onClick={() => props.fetchData(props.dinoInfo) }>Get Dinosaur!</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        dinoInfo: state.dinoInfo
    }
};

export default connect(mapStateToProps, {fetchData})(Header);