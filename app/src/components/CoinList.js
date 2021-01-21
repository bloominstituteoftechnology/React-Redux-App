import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetcher } from '../acitons/index'
import { CoinCard } from './CoinCard'

const  CoinList = ({  }) => {
    useEffect(() => {
        fetcher()
    }, [])

    const handleClick = () => {
        
        return (
            CoinCard()
        )
    }

        return( 
            
            <div 
                className="coins"
            >
                <button 
                    onClick={handleClick}
                >
                    See More: 
                </button>
            </div>
        )
}


const mapStateToProps = state => {
    return {
        price: state.price,
        isSelected: true,
    }
}

export default connect(mapStateToProps, {})(CoinList)