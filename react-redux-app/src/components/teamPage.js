import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchData} from '../actions'
import TeamCard from './teamCard'

const TeamPage = props => {
    useEffect(()=> {
        props.fetchData()
    }, [])

    if (props.isLoading) {
        return <h2>Loading Data...</h2>
    }

    return (
        <div className='card-container'>
            {props.error && <p>{props.error}</p>} 
            {props.mlbData.map(team => (        
                <TeamCard 
                    url={team.WikipediaLogoUrl} 
                    key={team.TeamID} 
                    name={team.Name} 
                    city={team.City} 
                    league={team.League} 
                    division={team.Division} />        
            ))}
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        mlbData: state.mlbData,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStatetoProps, {fetchData})(TeamPage)