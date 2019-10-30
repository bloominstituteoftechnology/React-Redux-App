import React from "react";
import { connect } from "react-redux";
// import { toggleArtist } from "../action/artist";

function Artist(props) {
  return (
    {
      props.artists.map(artist => {
        return (
          <div key={artist.id} >
            <h1>{artist.name}</h1>
          </div>
        )
      })
    }  
  );
}

function mapStateToProps(state) {
    return {
      artist: state.artist,
    };
  }
  
  const mapDispatchToProps = {
    song
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Artist);