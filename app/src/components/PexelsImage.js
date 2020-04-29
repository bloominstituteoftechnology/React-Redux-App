import React  from 'react'
import { Image } from "semantic-ui-react";
import { connect } from 'react-redux'

function PexelsImage(props) {
    return (
        <div>
            <Image src={props.cityImage} alt={props.altImageInfo} />
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("state map", state)
    return {
        cityImage: state.pexelsReducer.cityImage,
        altImageInfo:state.pexelsReducer.altImageInfo
    }
}

export default connect(mapStateToProps, {})(PexelsImage)
