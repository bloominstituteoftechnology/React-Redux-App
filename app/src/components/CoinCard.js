import react from 'react'
import { connect } from 'react-redux'

function CoinCard(props) {
    const { name, price, percentChange } = props.item

    return (
        <div 
            className="coinCard"
        >
            <div
                className="coinData"
            >
                <h2>
                    {name}
                </h2>
                <p>
                    Price: {price}
                </p>
                <p>
                    Percent Change: {percentChange}
                </p>
            </div>
        </div>
    )
}

export default connect(null, {})(CoinCard)