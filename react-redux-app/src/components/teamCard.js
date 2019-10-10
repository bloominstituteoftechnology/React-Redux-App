import React from 'react'

const TeamCard = props => {
    
    return (
        <div className="card" >
                <img className ="team-logo" src = {props.url} />
                <h2 className="team-name"> {props.name} </h2>
                <h3 className="team-location"> {props.city} </h3>
                <p className="team_division"> {props.league} {props.division} </p>

        </div>
    )
}


export default TeamCard
