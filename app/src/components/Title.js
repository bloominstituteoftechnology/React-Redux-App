import React from "react";
import {connect} from "react-redux"

const Title = (props) => {
    return(<div>Working</div>)}
//         <>
//         {
//             props.isFetching ? (
//                 <div>Fetching Data</div>
//             ) : props.error ? (
//                 <div>{props.error}</div>
//             ) : (
//                 props.items.map((photo) => {
//                 return <div>{photo.url}</div>
//                 })
//             )
//         }
//         </>
//     )
// }

const mapStateToProps = (state) => {
    return {
        isFetching: state.is_fetching,
        items: state.item,
        error: state.error

    }
}

export default connect(mapStateToProps, {})(Title)
