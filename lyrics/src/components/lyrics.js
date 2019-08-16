import React from 'react'
import { connect } from 'react-redux'

import { getData } from '../components/actions/index'
import Lyric from './song'

const SongLyrics = props => {
    const Data = () => {
        props.getData()
    }

    return (
        <>
            <p>{props.error}</p>
            <button onClick={Data} className='submit'>Submit</button>
            <div className='displayLyrics'>
                {props.lyrics && props.lyrics.map(lyrics =>
                    <Lyric key={lyrics.id} lyrics={lyrics} />
                )}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        test: state.test,
        lyrics: state.lyrics,
        getting: state.getting,
        error: state.error
    }
}

export default connect(mapStateToProps,{ getData })(SongLyrics) 