import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchTeams} from '../store/actions';
import Loader from 'react-loader-spinner';
import {Button} from 'reactstrap';
import {Card, CardBody, CardText, Container, Row, Col, CardImg} from 'reactstrap';

const TeamList = props =>{

  
    if(props.isLoading){
      return <Loader type="Puff"
      color="#00BFFF"
      height={50}
      width={50}
      timeout={8000} />
    }else{
    return( 
        <div>
            <h1 style={{color:"white"}}> All NBA TEAMS </h1>
            <Button color="danger" onClick={props.fetchTeams}>Team Info</Button>

            <Container style={{padding:"20px"}}>
              <Row>
            
            {props.teams.map(nba =>(
              <Col xs="3">
              <Card style={{width: '18rem', height: "30rem", margin: "0 auto"}}>
                <CardImg variant="top"  src="nbalogo.jpg"/>
                <CardBody>
                <h2>{nba.full_name}</h2>
                <CardText>City: {nba.city}  </CardText>
                <CardText>Conference: {nba.conference}</CardText>
                <CardText>Division: {nba.division}</CardText>
                <CardText>Abbreviation: {nba.abbreviation}</CardText>
                </CardBody>
              </Card>
              </Col>
            ))}
            </Row>
          </Container>
        </div>
   )
  }
};

const mapStatetoProps = state =>{
  return{
    isLoading: state.isLoading,
    teams: state.teams,
    error:state.error
  }
}
export default connect(mapStatetoProps, {fetchTeams})(TeamList);