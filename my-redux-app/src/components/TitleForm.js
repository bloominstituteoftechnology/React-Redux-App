import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTitle } from '../action/title';

const TitleForm = props => {
    const dispatch = useDispatch()
    const [newTitle, setNewTitle] = useState({
        name: "",
        artist: "",
        lyrics: ""
    });

    const handleChanges = e => {
        setNewTitle({
            ...newTitle,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(
            addTitle(newTitle)
        )
        setNewTitle({
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
                    value={newTitle.name}
                    onChange={handleChanges} />

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="artist"
                        placeholder="Artist"
                        value={newArtist.artist}
                        onChange={handleChanges} />

                    <form onSubmit={handleSubmit}>
                        <Field Component="textarea"
                            name="lyrics"
                            placeholder="Song Lyrics"
                            value={newTitle.lyrics}
                            onChange={handleChanges} />

                    <button type="submit">Submit</button>
                    
                </form>
            </div>
        );
};

export default TitleForm;