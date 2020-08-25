import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getDogListDispatcher} from "./dispatchers"
import logo from './logo.svg';
import './App.css';

function App() {
  const [dogs, setDogs] = useState([]);
  const dogList = useSelector(({dogList}) => {
    return dogList;
  })
  const dispatch = useDispatch()
  useEffect(()=> {
   dispatch(getDogListDispatcher());
   setDogs(dogList);
  });
  return (
    <div className="App">
       
    </div>
  );
}

export default App;
