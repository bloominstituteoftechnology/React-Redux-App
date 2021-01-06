import React, {useEffect} from 'react';

// ath: 34685
// ath_date: "2021-01-03T12:04:17.372Z"
// atl: 67.81
// atl_date: "2013-07-06T00:00:00.000Z"
// current_price: 34493
// data: "Bitcoin is the first successful internet money based on peer-to-peer technology; whereby no central bank or authority is involved in the transaction and production of the Bitcoin currency. It was created by an anonymous individual/group under the name, Satoshi Nakamoto. The source code is available publicly as an open source project, anybody can look at it and be part of the developmental process.
// ↵
// ↵Bitcoin is changing the way we see money as we speak. The idea was to produce a means of exchange, independent of any central authority, that could be transferred electronically in a secure, verifiable and immutable way. It is a decentralized peer-to-peer internet currency making mobile payment easy, very low transaction fees, protects your identity, and it works anywhere all the time with no central authority and banks.
// ↵
// ↵Bitcoin is design to have only 21 million BTC ever created, thus making it a deflationary currency. Bitcoin uses the <a href="https://www.coingecko.com/en?hashing_algorithm=SHA-256">SHA-256</a> hashing algorithm with an average transaction confirmation time of 10 minutes. Miners today are mining Bitcoin using ASIC chip dedicated to only mining Bitcoin, and the hash rate has shot up to peta hashes.
// ↵
// ↵Being the first successful online cryptography currency, Bitcoin has inspired other alternative currencies such as <a href="https://www.coingecko.com/en/coins/litecoin">Litecoin</a>, <a href="https://www.coingecko.com/en/coins/peercoin">Peercoin</a>, <a href="https://www.coingecko.com/en/coins/primecoin">Primecoin</a>, and so on.
// ↵
// ↵The cryptocurrency then took off with the innovation of the turing-complete smart contract by <a href="https://www.coingecko.com/en/coins/ethereum">Ethereum</a> which led to the development of other amazing projects such as <a href="https://www.coingecko.com/en/coins/eos">EOS</a>, <a href="https://www.coingecko.com/en/coins/tron">Tron</a>, and even crypto-collectibles such as <a href="https://www.coingecko.com/buzz/ethereum-still-king-dapps-cryptokitties-need-1-billion-on-eos">CryptoKitties</a>."
// error: ""
// genesis_date: "2009-01-03"
// getCoin: ƒ ()
// has_data: true
// image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
// loading: false
// market_cap: 637312395168
// name: "Bitcoin"
// percent1y: 369.29941
// percent7d: 25.77559
// percent24h: 11.88134
// percent30d: 78.48583
// percent200d: 270.38753

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
                    <p>24h: {Math.round(coinInfo.percent24h)}%</p>
                    <p>7d: {Math.round(coinInfo.percent7d)}%</p>
                    <p>30d: {Math.round(coinInfo.percent30d)}%</p>
                    <p>6m: {Math.round(coinInfo.percent200d)}%</p>
                    <p>1y: {Math.round(coinInfo.percent1y)}%</p>
                </div>
               <div className="cryptocurrency__info__container__boxes">
                   <div className="cryptocurrency__info__container__boxes_ath">
                    <h2>All Time High</h2>
                    <h3>${coinInfo.ath}</h3>
                    <p>Date Reached</p>
                    <p>{coinInfo.ath_date}</p>
                   </div>
                   <div className="cryptocurrency__info__container__boxes_atl">
                   <h2>All Time Low</h2>
                    <h3>${coinInfo.atl}</h3>
                    <p>Date Reached</p>
                    <p>{coinInfo.atl_date}</p>   
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

