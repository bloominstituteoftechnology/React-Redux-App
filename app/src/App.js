import React, { useReducer } from 'react'
import CryptoPart from './components/CryptoPart'
import Header from './components/Header'

import reducer,{ initialState } from './reducers';
import { addItem } from './actions/index'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChangeValue = (name, value) => {
    dispatch(addItem(name, value))
  }




  return (
    <div className="App">
      <Header/>

      <CryptoPart state={state} handleChangeValue={handleChangeValue} />

    </div>
  );
}

export default App;
