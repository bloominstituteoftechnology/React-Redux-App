import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { getFact } from "../actions/Actions";

const Fact = props => {

    const dispatch = useDispatch();
    const { fact, loading } = useSelector(state => state);

    useEffect(() => {
        getFact(dispatch);
    }, [dispatch]);

    loading && <h2>Loading...</h2>

    return (
        <div>
        <h2>{fact[0].text}</h2>
        <button onClick={() => getFact(dispatch)}>Get new fact</button>
        </div>
    )
}

export default Fact;
