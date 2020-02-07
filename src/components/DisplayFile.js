import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row, Card, CardImg, CardBody, Jumbotron, ListGroup, Button } from 'reactstrap';


const DisplayFile = () => {

  const stuff = useSelector(state => state.info);

  return (
    <Row>
    
    
      {stuff.map(param =>
        <Col lg='4'>
          <Card className='card'>
            <h3>{param.title}</h3>
            <CardBody>
          <Jumbotron flush className='imgDiv'>
            <CardImg src={param.primaryimageurl} alt='art' />
          </Jumbotron>
          <ListGroup flush>
          <ol>
            <li>{param.century}~~{param.dated}</li>
            <li>{param.division} ~~ {param.culture} </li>
            <li>{param.medium}~~{param.classification}</li>
                </ol>
              </ListGroup>
              
            </CardBody>
            <CardBody>
              <Button color='warning' href={param.url}>More Info</Button>
            </CardBody>
            </Card>
          </Col>
         
)}
      
    </Row> 
  )
}

export default DisplayFile;