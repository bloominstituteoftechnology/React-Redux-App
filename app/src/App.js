import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Core from './components/Core';
import HistoryList from './components/HistoryList';
import MissionList from './components/MissionList';
import RocketsList from './components/RocketsList';
import { Route } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className='app'>
      <Navbar />

      <Route exact path='/'>
        <Welcome />
      </Route>

      <Route path='/info'>
        <Core />
      </Route>

      <Route path='/news'>
        <HistoryList />
      </Route>

      <Route path='/missions'>
        <MissionList />
      </Route>

      <Route path='/rockets'>
        <RocketsList />
      </Route>
    </div>
  );
}