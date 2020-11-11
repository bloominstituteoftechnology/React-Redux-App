import React from "react";
// import { connect } from "react-redux";
// import { song } from '../action/songs';
import { useSelector } from 'react-redux';

export default function Title() {
  const songs = useSelector(state =>
    state.songs
  )
  console.log(songs)
return (
    <div>
    <h2>{songs.lyrics}</h2>
  </div>
    )    
}  

    

// function mapStateToProps(state) {
//     return {
//       title: state.title,
//     };
//   }

//   const mapDispatchToProps = {
//     song
//   };

//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Title)