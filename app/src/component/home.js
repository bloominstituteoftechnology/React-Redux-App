import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
   
    return(
        
        <div className="home-store">
            <header>
                <h2>My Store Product</h2>
            </header>
             <Link to="/product">
            <div>
               
                    <img className="home-img"
                        src="https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=995&q=80"
                        alt="" width="800px" height="500"/>
               
             </div>
                <button className="btn-detail">More Detail</button>
             </Link> 
        </div>
        
    )
}
export default Home;