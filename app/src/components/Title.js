import React from "react";
import {connect} from "react-redux"

const Title = (props) => {
    return(
        <>
        {
            props.isFetching ? (
                <div>Fetching Data</div>
            ) : props.error ? (
                <div>{props.error}</div>
            ) : (
                <div>
            <div>
            <img src={props.items.url} alt="Space Image" width = "600" height = "500"></img>
            </div>
            <div>{props.items.explanation}</div>
            </div>
        
            )
            
        }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.is_fetching,
        items: state.items,
        error: state.error

    }
}

export default connect(mapStateToProps, {})(Title)


// props.items.map((text) => {
//     return <div>{text.explanation}</div>
//     })