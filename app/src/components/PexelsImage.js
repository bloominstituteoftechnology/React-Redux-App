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
    return {
        cityImage: state.masterReducer.cityImage,
        altImageInfo:state.masterReducer.altImageInfo
    }
}

export default connect(mapStateToProps, {})(PexelsImage)
