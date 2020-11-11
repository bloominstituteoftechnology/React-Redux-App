import React, {useEffect} from 'react'
import rootReducer from '../reducers/index'
import {connect} from 'react-redux';
import {fetchCats} from '../actions';



// const Cats = (props)=> {
//     useEffect(()=> {
//         fetchCats();
//     },[fetchCats]);


//      console.log('CATPROPS', props)
//     const fetchCats = e => {
//         e.preventDefault();
//         fetchCats();
//     }

//     if (props.fecthingCats){
//         return <h2>...fetching data</h2>;
//         <button onClick={fetchCats}>fetch Cats</button>

//     }
//     return (
//         <div>
//         <h2> </h2>
//         </div>
//     )

// }
 
class Cats extends React.Component{
 
    componentDidMount(){
        this.props.fetchCats()
     }
    

  render(){
    console.log('CATPROPS', this.props)

    return(

    <div>
        <h2>HOUNDS!</h2>
        {this.props.cats.map(cat=> {
            return(
                <div className = 'cats' key={cat.id}>
                        
                    <h2>{cat}</h2>
                    </div>
            )
        })}
    </div>
    )
}}
 
const mapStateToProps = state =>{
    return{
        cats: state.cats
    }
}

export default connect (
    mapStateToProps,
    {fetchCats}
)(Cats)
// export default Cats