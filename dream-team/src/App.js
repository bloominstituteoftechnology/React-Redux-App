import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPlayer, addPlayer, removePlayer } from './actions/players';
import  PlayerList  from './components/playerList';
import ChosenPlayers from './components/chosenPlayers';
import './App.css';

function App(props) {

  useEffect(()=>{
    props.getPlayer();
  }, [])
    


  return (
    <div className="App">
      <h1> Dream Team </h1>
      <div className="app-container">
        <PlayerList players={props.players} addPlayer={props.addPlayer}/>
        <ChosenPlayers players={props.chosenPlayers} removePlayer={props.removePlayer}/>
      </div>
  

      
    </div>
  );
}

function mapStateToProps(state){
  console.log(state.players)
  return{
    players: state.players,
    playersLoading: state.isLoading,
    error: state.error,
    chosenPlayers: state.chosenPlayers
  }
}

const mapDispatchToProps = {
  getPlayer,
  addPlayer,
  removePlayer
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(App);
