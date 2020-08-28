import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDogs } from "../actions";
import styled from "styled-components";

const Container = styled.div`
 display: flex;
 flex-direction: column;
align-items: center;
margin: 1.5em;
`
const Image = styled.img `

margin: 1em;

`
const Button = styled.button`

background-color: #33cccc;
color: #000;
font-size: 1em;
border: none;
padding; 15px;
margin: 1em;

`
const DogImages = ({getDogs, doggos, isFetching }) => {
    // Hit the API after the component mounts
    useEffect(() => {
     getDogs();
    }, [getDogs]);
  
    if (isFetching) {
      return <h2>Loading...</h2>;
    }
  
    return (
      <>
         <Container>
          {/* {state.doggos.map((doggos) => ( */}
            <Image key={doggos} src={doggos} alt="" />
            <Button onClick={getDogs}>get a random dog image</Button>
          {/* ))} */}
        </Container>
      </>
    );
  };
  
  const mapStateToProps = (state) => {
    return { doggos: state.doggos, isFetching: state.isFetching };
  };

  const mapDispatchToProps = { getDogs };
  
  export default connect(mapStateToProps,mapDispatchToProps)(DogImages);