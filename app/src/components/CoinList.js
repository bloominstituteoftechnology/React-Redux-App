import React from 'react'
import { connect } from 'react-redux'
import CoinCard from './CoinCard'

function CoinList(props) {
    
    return(
        <div 
            className="coins"
        >
            {props.xxxxxx.map((item) => (
                <CoinCard 
                    key={item.id} 
                    item={item} 
                />
            ))}    
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.name
    }
}

export default connect(mapStateToProps, {})(CoinList)