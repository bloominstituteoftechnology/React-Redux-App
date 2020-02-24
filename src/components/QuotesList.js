import React from 'react';
import { connect } from "react-redux";
// import {getData} from '../actions/index';
// import cuid from 'cuid';







// const QuotesList = props => {
//   useEffect(() => {
//     props.getData();
//   },[])
// console.log("Here are the props", props)

// return(
//   <div className='quotes-container'> 
//   {props.quotes.map(quotes=>{

//     return(
//       <div key={cuid()} className='quotes'>
//         <p>{quotes.text}</p>
//         <p>{quotes.author}</p>
//         </div>
//     )
//   })}
  
//   </div>
// )

// }

// const mapStateToProps = state => {
//   return{
//     quotes: state.quotes
//   }
// }


// export default connect(mapStateToProps, {getData})(QuotesList)







const QuotesList = props => {
  console.log('here are my props!',props)
  return (
    <div className='quotes-container'>
      {props.error ? (
        <div>{props.error}</div>
      ) : (
        props.quotes.map(quote => (
          <div className = 'quotes' key={quote.id}>
           <h3>{quote.text}</h3>
            <h3>{quote.author}</h3>
          </div>
        ))
      )}

    </div>
  );
};
const mapStateToProps = state => {

  return {
    quotes: state.quotes,
    error: state.error
  }

}

export default connect(mapStateToProps, {})(QuotesList);