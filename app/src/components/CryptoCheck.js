import React, {useState, useEffect} from 'react'
import axios from 'axios'




function CryptoCheck() {

  const [initValue, setInitValue] = useState(intitialValues)
  const [supportedCoins, setSupportedCoins] = useState([])


  useEffect(() => {


  },[])

  const onChange = (e) => {
    const {name, value} = e.target
    setInitValue({
      ...initValue,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${initValue.currency}&vs_currencies=${initValue.convertCurrency}`)
      .then(res => {
        let b = res.data;
        setInitValue({
          ...initValue,
          valueCurrency: b[initValue.currency][initValue.convertCurrency]
        })
      })
      .catch(err => console.log(err))

  }


  return (
    <div>

      <div>
        <h2>PriceCheck: </h2>
        <form onSubmit={onSubmit}>

          <label>
            Currency:
            <input type="text" placeholder="bitcoin" name="currency" onChange={onChange} />
          </label>

          <label>
            Covert Currency:
            <select name="convertCurrency" onChange={onChange}>
              <option>---</option>
              {
                supportedCoins.map(coin => {
                  return <option key={coin}>{coin}</option>
                })
              }
            </select>
          </label>

          <button>Go!</button>
        </form>
        <h3>Current Value: <span>{initValue.valueCurrency}</span></h3>
      </div>

      <div>
        <h3>Trending: </h3>
      </div>


    </div>
  )
}

export default CryptoCheck
