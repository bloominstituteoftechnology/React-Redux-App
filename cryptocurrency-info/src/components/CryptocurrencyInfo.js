import React, {useEffect} from 'react';

function CryptocurrencyInfo({coinInfo}) {

useEffect(() => {
    console.log(coinInfo)
}, [coinInfo])


    return (
        <div className="cryptocurrency__info">
            <div className="cryptocurrency__info__container">
              <div className="cryptocurrency__info__container_header">
                  <img src={coinInfo.image} alt="image"/>
                <div className="cryptocurrency__info__container_header__info">
                    <h1>{coinInfo.name}</h1>
                    <h3>Current Price: ${coinInfo.current_price}</h3>
                    <h3>Market Cap: ${coinInfo.market_cap}</h3>
                    <h3>Genesis Date: {coinInfo.genesis_date}</h3>
                </div>
                </div>
                <div className="cryptocurrency__info__container__banner">
                    <p>Percent Increase In Price.</p>
                    <div className="cryptocurrency__info__container__banner__prices">
                    <p>24h: {Math.round(coinInfo.percent24h)}%</p>
                    <p>7d: {Math.round(coinInfo.percent7d)}%</p>
                    <p>30d: {Math.round(coinInfo.percent30d)}%</p>
                    <p>6m: {Math.round(coinInfo.percent200d)}%</p>
                    <p>1y: {Math.round(coinInfo.percent1y)}%</p>
                    </div>
                </div>
               <div className="cryptocurrency__info__container__boxes">
                   <div className="cryptocurrency__info__container__boxes_ath">
                    <h2>All Time High</h2>
                    <h3 className="green">${coinInfo.ath}</h3>
                    <h4>Date Reached</h4>
                    <p className="green">{coinInfo.ath_date}</p>
                   </div>
                   <div className="cryptocurrency__info__container__boxes_atl">
                   <h2>All Time Low</h2>
                    <h3 className="red">${coinInfo.atl}</h3>
                    <h4>Date Reached</h4>
                    <p className="red">{coinInfo.atl_date}</p>   
                   </div>
                </div>
                   <div className="cryptocurrency__info__container__description">
                       <p>{coinInfo.data}</p>
                   </div>
               
            </div>
        </div>
    )
}

export default CryptocurrencyInfo

