import React, {useEffect} from "react";
import { connect } from "react-redux";
import { fetchChars } from "./actions";
import Display from "./Display";



const CharList = props => {

    useEffect(() => {
        props.fetchChars()
    }, [])
    
    return (
        <div className="char">
                <div className="map">
            {props.char.map((person) => (

                <Display key={person.name}{...person} />
                
            ))}
                 </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return ({...state})
}
                
export default connect(mapStateToProps, {fetchChars})(CharList);