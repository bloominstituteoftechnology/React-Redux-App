import React from 'react'
import rootReducer from '../reducers/index'
import {connect} from 'react-redux';
import {fetchCats} from '../actions';
 
class Cats extends React.Component{
 
    componentDidMount(){
        this.props.fetchCats()
    }
    

 render(){

    return(

    <div>
        <h2>CATS!</h2>
        {this.props.cats.map(cat=> {
            return(
                <div className = 'cats' key={cat.id}>

                    <h2></h2>
                    </div>
            )
        })}
    </div>
    )
}}
// console.log('CATPROPS',state)

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