import React, { useEffect } from 'react'



import { connect } from 'react-redux'
import { getCharacters } from '../actions/appActions'

import  CharacterCard  from '../components/CharacterCard'


const Character = (props) => {
    //useEffect will use action getCharacters to retrive data
    useEffect(() => {
        props.getCharacters()
    }, [])

    console.log(props.name)
    return (
        <div>
            <h1>Characters from Rick and Morty</h1>
            {}
            <CharacterCard />
        </div>
    )
    
   
};

// function mapStateToProps(state) {
//     console.log(state)
//     return {
//         state,
//     }
// }

const mapDispatchToProps = {
    getCharacters: getCharacters
}

export default connect(null, mapDispatchToProps)(Character);