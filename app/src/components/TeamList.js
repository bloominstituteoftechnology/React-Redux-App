import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchTeams} from '../store/actions';


const TeamList = props =>{
    return( 
        <div>
            <h1>NBA TEAMS</h1>
        </div>
   )
};

const mapStatetoProps = state =>{
  return{
    isLoading: state.isLoading,
    teams: state.teams,
    error:state.error
  }
}
export default connect(mapStatetoProps, fetchTeams)(TeamList);