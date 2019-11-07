import React from "react";
import styled from 'styled-components';

const CardHolder = styled.div`
    background: orange;
    margin-top: 1%;
    margin-bottom: 1%;
    border: 1px solid red;
    width: 20%;
    border-radius: 50px;
`;

const BasicCard = props => {
    return (

        <CardHolder className ='basic-card' 
            key={props.player.id} >
            <h2>{`${props.player.first_name} ${props.player.last_name}`}</h2>
            <p><span>Team:</span> {props.player.team.full_name}</p>
            <p><span>Position:</span> {props.player.position}</p>
            <p><span>Division</span>: {props.player.team.division}</p>
        </CardHolder>
    )
}

export default BasicCard;


// DATA IN API***************
// {"data":[{"id":14,"first_name":"Ike","height_feet":null,"height_inches":null,"last_name":"Anigbogu","position":"C","team":{"id":12,"abbreviation":"IND","city":"Indiana","conference":"East","division":"Central","full_name":"Indiana Pacers","name":"Pacers"},"weight_pounds":null}
