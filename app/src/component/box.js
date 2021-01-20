import React from 'react'

class Box extends React.Component{
    render(){
        return(
        <div>
            <div className="boxColor" style={{backgroundColor:`${this.props.color}`}}>
            <button onClick={()=>{this.props.handleClick()}}>Change Color</button>
            </div>
            
        </div>)
    }
}

export default Box