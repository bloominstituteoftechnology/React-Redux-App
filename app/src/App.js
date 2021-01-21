import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetcher } from './acitons/index'
import CoinList from './components/CoinList'

function App(props) {
  const { fetcher } = props

  return (
    <div className="App">
      <CoinList />
    </div>
  )
}

export default App
