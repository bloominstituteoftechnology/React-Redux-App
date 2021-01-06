import React, {useEffect} from 'react';


function CryptocurrencyInfo({coinInfo}) {

useEffect(() => {
    console.log(coinInfo)
}, [coinInfo])


    return (
        <div className="cryptocurrency__info">
            <div className="cryptocurrency__info__container">
              <div className="cryptocurrency__info__container_header">
                  {/* <img src={data.image.large} alt="image"/> */}
                <div className="cryptocurrency__info__container_header__info">
                    {/* <h1>{data.name}</h1>
                    <h3>Current Price: ${data.market_data.current_price.usd}</h3>
                    <h3>Market Cap: ${data.market_data.market_cap.usd}</h3>
                    <h3>Genesis Date: {data.genesis_date}</h3> */}
                </div>
             </div>  
            </div>
        </div>
    )
}

export default CryptocurrencyInfo

