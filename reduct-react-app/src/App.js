import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import axios from 'axios';

function App(props) {
  const [data, setData] = useState({})
    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/image/random")
        .then(res => {
            setData(res.data.message)
        })
        .catch(err => {
            console.log('error:', err)
        })
    })
  return (
    <div className="App">
     <Header />        
    </div>
  );
}

export default App;
