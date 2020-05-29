import React, { useEffect } from "react";

import { useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { getImage } from "../actions";
import { Spinner, Card, CardImg } from "reactstrap";
import Button from "@material-ui/core/Button";
import { Container, Row, Col } from "reactstrap";

const Cat = (props) => {
  const match = useRouteMatch();

  const handleGetImg = (e) => {
    e.preventDefault();

    props.getImage(match.params.catID);
  };

  useEffect(() => {
    props.getImage(match.params.catID);
  }, []);
  const catItem = props.breeds.find((breed) => breed.id === match.params.catID);
  //console.log("catItem image", catItem);
  return (
    <Container className="themed-container" fluid={true}>
      <Row style={{ margin: "0", marginTop: "1rem", marginBottom: "1rem" }}>
        <Col xs="12" md="6" xl="6">
          <Card style={{ border: "none", height: "auto" }}>
            {props.isFetchingData ? (
              <div style={{ margin: "6rem auto" }}>
                <Spinner
                  color="primary"
                  style={{ width: "3rem", height: "3rem" }}
                />{" "}
              </div>
            ) : (
              <div>
                <CardImg
                  alt="cat"
                  src={catItem.image}
                  style={{ width: "100%" }}
                />
              </div>
            )}
          </Card>
        </Col>

        <Col xs="12" md="6" xl="6">
          <Card style={{ padding: "2rem", border: "none" }}>
            <div>
              <h1 style={{ textAlign: "center" }}>{catItem.name}</h1>
              <p> {catItem.description}</p>
              <p>Life span: {catItem.life_span} years</p>
              <p>Dog friendly level: {catItem.dog_friendly} </p>
              <p>Energy level: {catItem.energy_level}</p>
              <p>Hypoallergenic level: {catItem.hypoallergenic}</p>
              <p>Hairless level: {catItem.hairless}</p>
              <p>
                Wikipedia:{" "}
                <a
                  href={catItem.wikipedia_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {catItem.wikipedia_url}
                </a>
              </p>
              <div style={{ marginLeft: "25%", marginTop: "2rem" }}>
                <Button
                  style={{
                    with: "60%",
                  }}
                  onClick={handleGetImg}
                  variant="contained"
                  color="primary"
                >
                  {`Refresh photo of ${catItem.name} breed`}
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
//export default Cat;
const mapStateToProps = (state) => {
  return {
    breeds: state.breeds,
    isFetchingData: state.isFetchingData,
  };
};

export default connect(mapStateToProps, { getImage })(Cat);
