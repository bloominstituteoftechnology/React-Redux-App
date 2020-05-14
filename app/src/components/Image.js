import React from "react";
import { Card, CardImg, Col } from "reactstrap";

const Image = (props) => {
  return (
    <Col xs='12' sm='6' md='4' xl='3' className='p-4'>
      <Card>
        <CardImg width='100%' src={props.image} alt='Card image cap' />
      </Card>
    </Col>
  );
};

export default Image;