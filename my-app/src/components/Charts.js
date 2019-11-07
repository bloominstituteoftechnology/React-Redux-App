// import React, { useEffect } from "react";
// import Chart from "./Chart.js";
// import { connect } from "react-redux";

// import { fetchCoinData } from "../actions";

// const Charts = props => {
//   // console.log(props);

//   useEffect(() => {
//     props.fetchCoinData();
//   }, []);

//   if (props.isFetching) {
    
//     return <h2>Loading Coins...</h2>;
//   }

//   return (
//     <div className="charts">
//       {props.error && <p>{props.error}</p>}
//       {props.coinData.map(coin => (
//         <div className="chart__container" key={coin.name}>
//           <h2 className="coin__title">{coin.name}</h2>
//           <h4 className="coin__symbol">{coin.symbol}</h4>
//           <div className="coin__logo">
//             <img src={coin.image} height="60" alt={coin.name} />
//           </div>
//           <Chart sparklineData={coin.sparkline_in_7d.price} />
//         </div>
//       ))}
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     coinData: state.coinData,
//     isFetching: state.isFetching,
//     error: state.error
//   };
// };

// export default connect(
//   mapStateToProps,
//   { fetchCoinData }
// )(Charts);