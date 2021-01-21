import React from 'react'
import { Card, CardBody, CardText, CardImg} from 'reactstrap'
import styled from 'styled-components'


const StyledCard = styled.div`
     margin: 50px auto;
     box-shadow: 0px 1px 30px -2px #7cbc6c;
     border-radius: 20px;
     width: 25%;

     .card {
        border: 1px solid #62a4ab;
         font-size: 1.5rem;
         border-radius: 20px;
         background-color: #fffaf1;
     }

     .cardImg {
        
         height: 22vh;
         border-radius: 20px;
     }

     .cardBody {
         padding-bottom: 10px;
         border-radius: 20px;
         font-size: 1.0rem;
     }

     .btn {
         font-size: 1.0rem;
         background-color: #7cbc6c;
         border-radius: 5px;
         color: #fffaf1;
         width: 120px;
         height: 5vh;
         margin-bottom: 15px;
         &:hover {
             opacity:.8;
         }
     }
`;


const CharCard = ({image, name, status, gender, species }) =>  {
return (
    <StyledCard>
        <Card className='card'>
        <CardImg className='cardImg' src={image} alt='img' style={{ marginTop: '1rem' }} />
        <CardBody className= 'cardBody'>
        <CardText tag='h3' style={{color: 'black'}}>Name: {name}</CardText>
        <CardText tag='h3' style={{color: 'black'}}>Status: {status}</CardText>
        <CardText tag='h3' style={{color: 'black'}}>Species: {species}</CardText>
        <CardText tag='h3' style={{color: 'black'}}>Gender: {gender}</CardText>
        </CardBody>
        </Card>
    </StyledCard>
)
}

export default CharCard;