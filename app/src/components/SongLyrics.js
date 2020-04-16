import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import { fetchLyric } from '../store/actions/LyricsActions'

const SongLyrics = ( props ) => {

    useEffect(() => {
        props.fetchLyric()
    }, [])

    return (
        <div>
            <h1>Song Lyrics</h1>
            {props.isFetching && <Loader
         type="Bars"
         color="#00BFFF"
         height={100}
         width={100}
         
 
      />}
            {props.lyric && <h3>{props.lyric}</h3>}
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