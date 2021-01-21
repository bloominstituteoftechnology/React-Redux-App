import React, {useEffect, useState} from 'react'
import TrendingPart from './TrendingPart'
import axios from 'axios'


function CryptoPart({state, handleChangeValue}) {
  const [bb, setBB] = useState('')
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
      .then(res => {

        state.listOfCrypto = res.data
        console.log(state)
      })
      .catch(err => console.log(err))
  },[])





  const handleChange = (e) => {
    const {name, value} = e.target
    handleChangeValue(name, value)
  }


  const onSubmit = (e) => {
    e.preventDefault()
    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${state.currentCrypto}&vs_currencies=${state.exchangeCrypto}`)
    .then(res => {
      setBB(res.data[state.currentCrypto][state.exchangeCrypto])
    })
    .catch(err => console.log(err))
  }


  return (
    <div>
      <h1>CryptoPart</h1>

      <form onSubmit={onSubmit}>

        <div>
          <label>
            Crypto 1:
            <input
            type="text"
            placeholder="bitcoin"
            name="currentCrypto"
            onChange={handleChange}
            value={state.currentCrypto} />
          </label>
        </div>

        <div>
          <label>
            Crypto 2:
            <select name="exchangeCrypto" onChange={handleChange} value={state.exchangeCrypto}>
              <option>--</option>
              {
                state.listOfCrypto.map(crypto => {
                  return <option>{crypto}</option>
                })
              }
            </select>
          </label>
        </div>

        <button>click me</button>
      </form>

      <h3>Sum: <span>{bb}</span></h3>





      <TrendingPart/>
    </div>
  )
}

export default CryptoPart
