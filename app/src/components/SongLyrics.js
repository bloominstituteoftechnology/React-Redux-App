import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import { fetchLyric } from '../store/actions/LyricsActions'

const SongLyrics = ( props ) => {

    useEffect(() => {
        props.fetchLyric()
    }, [])

    return (
        <div className='header' >
            <h1>Adventure of a Lifetime</h1>
            {<Loader
                type="Bars"
                color="#C08A78"
                height={100}
                width={100}
            />}
            <div className='lyrics'>
            {props.lyric && <h3>{props.lyric}</h3>}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        lyric: state.lyrics.lyric,
        isFetching: state.lyrics.isFetching,
        error: state.lyrics.error
    }
}

export default connect(
    mapStateToProps,
    {fetchLyric}
)(SongLyrics);