import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Nope from './components/Nope';
import './App.css';
import axios from 'axios';

function App() {
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
     <Input />
     <Nope />     
    </div>
  );
}

export default App;
