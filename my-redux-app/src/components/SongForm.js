import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { song } from '../action/songs';
import Title from './Title';

const SongForm = () => {
    const [newArtist, setNewArtist] = useState({artist: ''});
    const [newSong, setNewSong] = useState({song:''});
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(newArtist)
        dispatch(song(newArtist, newSong));
    }, [dispatch, newArtist, newSong]);
    
    const handleArtist = e => {
        setNewArtist({
            ...newArtist,
            [e.target.name]: e.target.value
        })
    };

    const handleSong = e => {
        setNewSong({
            ...newSong,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        // dispatch(
        //    addSong(newSong)
        // )
        setNewArtist('');
        setNewSong('');
    };

    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="artist"
                    placeholder="Artist"
                    value={newArtist.artist}
                    onChange={handleArtist} />

                <input
                    type="text"
                    name="song"
                    placeholder="Song Title"
                    value={newSong.song}
                    onChange={handleSong} />

                <button type="submit">Submit</button>

            </form>          
        </div>
        
           <div>
           <Title newSong={newSong} newArtist={newArtist}/>
          </div>
          </>
        );
};

export default SongForm;