import React, { useEffect } from 'react';
import { connect } from "react-redux";
import {getData} from '../actions/index';

const QuotesList = props => {
  useEffect(() => {
    props.getData();
  },[])
console.log("Here are the props", props)

return(
  <div className='quotes-container'> 
  {props.quotes.map(quotes=>{

    return(
      <div className='quotes'>
        <p>{quotes.text}</p>
        <p>{quotes.author}</p>
        </div>
    )
  })}
  
  </div>
)

}

const mapStateToProps = state => {
  return{
    quotes: state.quotes
  }
}


export default connect(mapStateToProps, {getData})(QuotesList)







// const QuotesList = props => {
  
//   return (
//     {props.data.map(item => 
//       (<div>{item.text}</div>)
//       )}
//   )
//     };

// const mapStateToProps = state => {
//   return {
//     quotes: state.text,
//     error: state.error,
//     data: state
//   };
// };
// export default connect(mapStateToProps, {})(QuotesList);
