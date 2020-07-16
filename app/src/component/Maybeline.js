import React from 'react';
import {useRouteMatch, NavLink, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchProducts } from '../action'



const MaybelineProduct = props =>{
    console.log(props)

    const {url} = useRouteMatch()
    return (
        <div>
            {props.loading && <h4>Data is loading</h4>}
            
                <div className="product-div">  
                    {
                        props.product.map(item => {
                            if(item.brand === "maybelline"){
                                return (
                                <div key={item.id} className="product-list">
                                    <NavLink className="name" to={`${url}/${item.id}`}>
                                        <div className="product">
                                            <img  src={item.image_link} alt={item.name} width="150px" />
                                            <p> {item.name} </p>
                                            <p> ${item.price} </p>
                                        </div>   
                                    </NavLink>
                          </div>)
                            }
                        }
                        
                        )
                    }
                </div>     
        </div>
    )
}
const mapStateToProps = state => {
    return {
        loading: state.loading,
        product: state.product,  
        error: state.error,
    } 
  
  }
  export default connect(
    mapStateToProps,
    { fetchProducts }
  )(MaybelineProduct);
  