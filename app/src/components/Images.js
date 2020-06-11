// import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import { getData } from "../actions/actions";
// import Image from "./Image";
// import { reducer } from "../reducers/imageReducer";

// import "../App.css";

// const Images = (props) => {
//   const [querySearch, setQuerySearch] = useState("car");

//   useEffect(() => props.fetchImages(querySearch), []);

//   const onChange = (e) => setQuerySearch(e.target.value);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     props.fetchImages(querySearch);
//   };

//   return (
//     <div className='container'>
//       <div className='header'>
//         <h1>Search Images</h1>
//         <form onSubmit={onSubmit}>
//           <input
//             type='text'
//             placeholder='Search For Image'
//             value={querySearch}
//             onChange={onChange}
//           />
//           <button>Search!</button>
//         </form>
//       </div>

//       <div className='imageGallery'>
//         {props.images.map((image) => (
//           <Image key={image.id} imageURL={image.largeImageURL} />
//         ))}
//       </div>
//     </div>
//   );
// };
// const mapStateToProps = (state) => {
//   return {
//     imagesList: state.imagesList,
//     isLoading: state.imagesList.isLoading,
//     error: state.error,
//   };
// };
// export default connect(mapStateToProps, { getData })(Images);
