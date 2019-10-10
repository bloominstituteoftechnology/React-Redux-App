import React from 'react'

const TeamCard = props => {
    console.log('team card props', props)
    return (
        <div className="card" >
                <h2 className="team-name"> {props.name} </h2>
                <h3 className="team-location"> {props.city} </h3>
                <p className="team_division"> {props.league} {props.division} </p>

        </div>
    )
}


export default TeamCard
