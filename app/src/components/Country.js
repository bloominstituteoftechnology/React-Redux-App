import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";

import "../App.css";

const Country = (props) => {
  return (
    <div className='container'>
      <h1>Countries of the world</h1>
      {props.isLoading ? (
        <div>Loading Data...</div>
      ) : (
        <div className='buttonDiv'>
          <button onClick={() => props.getData()}>Get Countries</button>
          {props.error && (
            <div style={{ color: "red" }}>*error loading data*</div>
          )}
          {props.countriesList.map((country) => {
            return (
              <div className='list' key={country.Name}>
                <div className='item1'>
                  <span>Country Name:</span> {country.Name}
                </div>
                <div className='item2'>
                  <span>ISO2 Code:</span> {country.ISO}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    countriesList: state.countriesList,
    isLoading: state.isLoading,
    error: state.error,
  };
};
export default connect(mapStateToProps, { getData })(Country);

// import React from "react";
// import { connect } from "react-redux";
// import { getData } from "../actions/actions";

// import "../App.css";

// const Country = (props) => {
//   return (
//     <div className="page-container">
//     <div className="heading">
//       <h1>Countries of the world</h1>
//       {props.isLoading ? (
//         <div>Loading Data...</div>
//       ) : (
//         <div>
//           <button onClick={() => props.getData()}>Get Countries</button>
//           {props.error && (
//             <div style={{ color: "red" }}>*error loading data*</div>
//           )}
//           {props.countriesList.map((country) => {
//             return (
//               <div className='list' key={country.Name}>
//                 <div className='item'>Country Name: {country.Name}</div>
//                 <div className='item'>ISO2 Code: {country.ISO}</div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };
// const mapStateToProps = (state) => {
//   return {
//     countriesList: state.countriesList,
//     isLoading: state.isLoading,
//     error: state.error,
//   };
// };
// export default connect(mapStateToProps, { getData })(CountryName);

// // import React from "react";

// // export default function (props) {
// //   return (
// //     <div className='imageContainer'>
// //       <img src={props.imageURL} alt='PixaBay' />
// //     </div>
// //   );
// // }
