import React from 'react';
import {connect} from 'react-redux'
import HousesCard from './housesCard';


const Housesmap = props => {
return <div className='map-cont'>

        {props.houses.map(e=>
            <HousesCard houses={e}/>)}
        </div>
}

const mapStateToProps = state => {
    return {
        houses:state.houses
    }
}

export default connect(mapStateToProps, {})(Housesmap);