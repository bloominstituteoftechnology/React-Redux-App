import React from "react";

import { Image, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getImage } from "../actions";

const Images = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getImage());
    };

    return (
        <>
            <Button type="primary" onClick={handleClick}>
                Get new Image
            </Button>
            {state.error ? <h2>ERROR: {state.error}</h2> : <></>}
            {state.isFetching ? <h2>Fetching image...</h2> : <></>}
            <div className="images-div">
                {state.images.map((image) => (
                    <Image width={250} src={image} />
                ))}
            </div>
        </>
    );
};

export default Images;
