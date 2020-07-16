import React from 'react';
import {useRouteMatch, NavLink, Link} from 'react-router-dom'



const ProductsList = props =>{
    console.log(props)

    const {url} = useRouteMatch()
    return (
        <div>
            {props.loading && <h4>Data is loading</h4>}
            
                <div className="product-div">  
                    {
                        props.product.map(item =>  (
                            <div key={item.id} className="product-list">
                              <NavLink className="name" to={`${url}/${item.id}`}>
                                <div className="product">
                                    <img  src={item.image_link} alt={item.name} width="150px" />
                                    <p> {item.name} </p>
                                    <p> ${item.price} </p>
                                </div>   
                                </NavLink>
                          </div>
        
                        ))
                    }
                </div>     
        </div>
    )
}

export default ProductsList;