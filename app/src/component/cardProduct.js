import React from 'react'

import { useParams } from 'react-router-dom'

const CardProduct = props => {
   console.log(props)
    const { itemId } =useParams()

   
    
    const items = props.product.find(item =>{
        console.log(item)
        return item.id == itemId
    })
 
    console.log(items)
    if(!items) {
        console.log(items)
        return 'looking for item..'
    }
    return (
        <div className="product-info">
           <div className="product-image">
               <img src={items.image_link} width="200px"/>
           </div>
           <div className="info">
                <h3> {items.name} </h3>
                <p> {items.product_type} </p>
                <p>$ {items.price} </p>
                
            </div>
            <div className="item-descrip">
                <p> {items.description} </p>                
            </div>
            <div className="product-color">
                {items.product_colors.map(color => (
                  <p key={color.id} className="color"> Color: {color.colour_name} </p>
                 ))} 
            </div>
        </div>
    )
}
export default
CardProduct;