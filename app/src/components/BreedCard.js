import React from "react";
import { connect } from "react-redux";
import { Col, CardImg } from "reactstrap";
import cat from "../assets/cat.png";

import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "react-router-dom";

const BreedCard = (props) => {
  console.log("breedCardprops", props);
  return (
    <Col xs="12" md="6" xl="4">
      <Card
        style={{ margin: "0.5rem", height: "40rem", background: "#F4F4F4" }}
      >
        <CardImg
          top
          width="100%"
          src={props.breed.image}
          alt="Card image cap"
        />
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

          <Link
            to={`/cat/${props.breed.id}`}
            onClick={() => props.setSearchToggle(true)}
          >
            <div style={{ marginTop: "0.8rem" }}>
              Read about me...
              <img
                alt="cat"
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
