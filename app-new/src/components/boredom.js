import React from 'react';
import { connect } from 'react-redux';
import { getActivity } from '../actions/index';

const Boredom = props => {
    return(
        <div>
            <div style={{
                fontFamily: "Titillium",
                color: "dodgerblue",
                size: "3rem"
            }}>
                Bored?
            </div>
            <div>
                { props.activity }
                { props.type }
            </div>
            <div>
                <button onClick={props.getActivity}>Find an Activity</button>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        activity: state.activity,
        loading: state.loading
    }
}

export default connect(mapStateToProps, {getActivity})(Boredom);