import React from 'react'
import {connect} from 'react-redux'

const Jokes = (props) => {
    console.log(props)
    return (
        <div>
            {props.jokes.map((joke)=>{
                return (
                    <div>
                        {joke.setup}
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        jokes: state.jokes,
        error:state.error
    }
}

export default connect(mapStateToProps,{})(Jokes);
