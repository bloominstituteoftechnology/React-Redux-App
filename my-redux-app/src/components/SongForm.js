import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addSong } from '../action/songs';

const SongForm = () => {
    const dispatch = useDispatch()
    const [newSong, setNewSong] = useState({
        name: "",
        artist: "",
        lyrics: ""
    });

    const handleChanges = e => {
        setNewSong({
            ...newSong,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(
           addSong(newSong)
        )
        setNewSong({
            name: "",
            artist: "",
            lyrics: ""
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Song Title"
                    value={newSong.name}
                    onChange={handleChanges} />

                <input
                    type="text"
                    name="artist"
                    placeholder="Artist"
                    value={newSong.artist}
                    onChange={handleChanges} />

                <input
                    type="textarea"
                    name="lyrics"
                    placeholder="Song Lyrics"
                    value={newSong.lyrics}
                    onChange={handleChanges} />

                <button type="submit">Submit</button>

            </form>          
        </div>
           
        );
};

export default SongForm;