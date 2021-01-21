import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetcher } from '../acitons/index'

export const CoinCard = ({  }) => {
    
    useEffect(() => {
        fetcher()
      }, [])

    return (
        <div 
            className="coinCard"
        >
            <div
                className="coinData"
            >
                <h2>
                    name: Bitcoin
                </h2>
                <p>
                    Price {this.state.price}
                </p>
                <p>
                    Percent Change: infinity
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isSelected: true,
        price: state.price
    }
}


export default connect(mapStateToProps, {})(CoinCard)