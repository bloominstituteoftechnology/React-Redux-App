import React, { useEffect } from "react";
import { bounce, zoomInLeft, swing, slideInRight, tada, rubberBand, slideInLeft, rollIn, fadeInDownBig, hinge } from 'react-animations';
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";

import { getAdvice } from "../actions/actions.js";

//styled components with 10 different animations
const Bounce = styled.div`animation: 2s ${keyframes `${bounce}`} `;
const ZoomInLeft = styled.div`animation: 2s ${keyframes `${zoomInLeft}`} `;
const Swing = styled.div`animation: 2s ${keyframes `${swing}`} `;
const SlideInRight = styled.div`animation: 2s ${keyframes `${slideInRight}`} `;
const SlideInLeft = styled.div`animation: 2s ${keyframes `${slideInLeft}`} `;
const Tada = styled.div`animation: 2s ${keyframes `${tada}`} `;
const RubberBand = styled.div`animation: 2s ${keyframes `${rubberBand}`} `;
const RollIn = styled.div`animation: 2s ${keyframes `${rollIn}`} `;
const FadeIn = styled.div`animation: 2s ${keyframes `${fadeInDownBig}`} `;
const Hinge = styled.div`animation: 2s ${keyframes `${hinge}`} `;

function AdviceList(props) {

  //array of animations
  const animationArray = [
    Bounce,
    ZoomInLeft,
    Swing,
    SlideInRight,
    SlideInLeft,
    Tada,
    RubberBand,
    RollIn,
    FadeIn
  ]

  //array index generated using math.floor and the lenght of the animatiion array
  //Use Math.floor() to get the index ranging from(0 to arrayLength-1).
  var arrayIndex = Math.floor(Math.random() * animationArray.length);

  //stores the name of each randomly selected component
  //used below instead of the direct name of a styled component
  //this produces a different animation every time the "i need advice" button is selected
  var AnimationComponent = animationArray[arrayIndex];

    useEffect(() => {

        // run action creator when the component mounts
        props.getAdvice();

      }, [getAdvice]);
    
      if (props.isFetching) {
        return <h3>Loading great advice!</h3>;
      }
      
      console.log("advice here: ", props.advice);
    
      return (  
        <>
       
          <div className = "todo-list-div">
            <AnimationComponent>
              <h2>{props.advice}</h2>
            </AnimationComponent>
          </div>        

          <div className = "generator-button-div">            
            <button onClick={props.getAdvice}>I Need Advice</button>
          </div>

        </>
      );  

}

const mapStateToProps = state => {
    return {
      advice: state.advice,
      isFetching: state.isFetching,
      error: state.error
    };
};
  

export default connect(
    mapStateToProps,
    { getAdvice }
)(AdviceList);