import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchJokes } from '../store/actions'
import styled from 'styled-components'


const StyledCard = styled.div`
background-color: #BF90CB;
color:#03098E;
font-size: 1.3rem;
display:flex;
justify-content: center;

img{
    margin-left:25%;
 
}

h1{
    font-size: 300%;
    color:yellow;
}
`



const JoskesList = (props) => {
    useEffect(() => {
        props.fetchJokes();
    },[]);

    return (
        <StyledCard className='container'>
        <div>
            <h1> Jokes </h1>
            <img src="https://media3.giphy.com/media/l3vR7xOQTuZ8J7HPy/200w.webp?cid=ecf05e47qp7psryoybnuivgm59jb5ffumrgrptrj3suf1p5t&rid=200w.webp" alt='spongebob meme' />

      {props.isLoading ? <p>Loading jokes...</p> : null}
      {props.error ? <p>{props.error}</p> : null}
      {props.jokes.map((joke) => (
        <div>
              <h4>{joke.setup} <br></br>{joke.punchline}</h4>
      </div>
      ))}
            </div>
            </StyledCard>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    jokes: state.jokesData,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchJokes})(JoskesList);
