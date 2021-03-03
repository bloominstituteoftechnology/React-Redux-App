import React, { useEffect } from 'react'

import axios from 'axios'

import { connect } from 'react-redux'
import { getCharacters } from '../actions/appActions'


const Character = (props) => {
    
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api')
            .then(res => {
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [])

    console.log(props)
    return (
        <div>
            <h1>Marvel Characters</h1>
        </div>
    )
    
   
};

function mapStateToProps(state) {
    return {
        state,
    }
}

const mapDispatchToProps = {
    getCharacters: getCharacters
}

export default connect(mapStateToProps, mapDispatchToProps)(Character);