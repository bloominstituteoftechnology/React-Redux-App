import React from 'react'

const Card = props => {
    return (
        <div key={props.player.id} className="card">
            <h3>{`${props.player.first_name} ${props.player.last_name}`}</h3>
            <p><span>Position</span>: {props.player.position}</p>
            <p><span>Team</span>: {props.player.team.full_name}</p>
            <p><span>City</span>: {props.player.team.city} / {props.player.team.abbreviation}</p>
            <p><span>Division</span>: {props.player.team.division}</p>
            <p><span>Conference</span>: {props.player.team.conference}</p>
        </div>
    )

}

export default Card