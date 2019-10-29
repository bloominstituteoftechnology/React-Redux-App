import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTitle } from '../action/title';

const TitleForm = props => {
    const dispatch = useDispatch()
    const [newTitle, setNewTitle] = useState({
        name: ""
    });

    const handleChanges = e => {
        setNewTitle({
            ...newTitle,
            [e.target.name]: e.target.value
        })
    };

    const handleEdit = e => {
        e.preventDefault();
        props.toggleEditing();
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(
            addTitle(newTitle)
        )
        setNewTitle("");
        props.updateTitle(newTitle || props.title);
    };

    return (
        <div>
            {props.title ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Song Title"
                        value={newTitle}
                        onChange={handleChanges}
                    />

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="artist"
                            placeholder="Artist"
                            value={newArtist}
                            onChange={handleChanges}
                        />
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="lyrics"
                                placeholder="Song Lyrics"
                                value={newTitle}
                                onChange={handleChanges}
                            />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                    <div>
                        <h1>{props.Title}</h1>
                        <button onClick={handleEdit}>Edit</button>
                    </div>
                )}
        </div>
    );
};

export default TitleForm;