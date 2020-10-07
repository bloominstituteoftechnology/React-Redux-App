// import React, { useState } from 'react';
// import { connect } from 'react-redux';

// const Form = ({ prices }) => {
//   const [filtered, setFiltered] = useState("")

//   const handleChange = e => {
//     setFiltered(e.target.value)
//   }
//   const filteredPrices = prices.filter((element, index) => {
//     return element.includes(filtered)
//   })
//     .map((element, index) => {
//       return <h2>{element}</h2>
//     })
//   return (
//     <div>
//       <input onChange={handleChange} />
//       {filteredPrices()}
//     </div>
//   )
// }

// const mapStateToProps = state => {
//   return {
//     prices: state.prices
//   }
// }

// export default connect(mapStateToProps, {})(Form)