import React from "react";
import { connect } from "react-redux";
import { Col } from "reactstrap";
import cat from "../assets/cat.png";
//import { getImage } from "../actions";
//import { Link } from "react-router-dom";
//import Cat from "./Cat";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import {
  //   useParams,
  //   Route,
  Link,
  //   NavLink,
  //   Switch,
  //   useRouteMatch,
} from "react-router-dom";

const BreedCard = (props) => {
  //   const handleGetImg = (e) => {
  //     e.preventDefault();
  //     props.getImage(props.breed.id);
  //   };
  return (
    <Col xs="12" md="6" xl="4">
      <Card
        style={{ margin: "0.5rem", height: "14rem", background: "#F4F4F4" }}
      >
        <CardBody>
          <CardTitle
            style={{
              fontSize: "1.5rem",
              borderBottom: "1px solid grey",
              color: "#4154B3",
            }}
          >
            {`${props.breed.name}`}
          </CardTitle>
          <CardSubtitle
            style={{ marginBottom: "0.5rem" }}
          >{`Origin: ${props.breed.origin}`}</CardSubtitle>
          <CardSubtitle>{`Temperament: ${props.breed.temperament}`}</CardSubtitle>

          <Link to={`/cat/${props.breed.id}`}>
            <div style={{ marginTop: "0.8rem" }}>
              Read about me...
              <img
                src={cat}
                style={{ width: "2rem", marginLeft: "1rem" }}
              />{" "}
            </div>
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};

//export default BreedCard;
const mapStateToProps = (state) => {
  return {
    isFetchingData: state.isFetchingData,
  };
};

export default connect(mapStateToProps, {})(BreedCard);
