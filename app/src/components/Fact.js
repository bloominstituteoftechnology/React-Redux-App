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
        <>
        {fact.map(fact => {
            return <h2>{fact.text}</h2>
        })}
        <button onClick={() => getFact(dispatch)}>Get new fact</button>
        </>
    )
}

export default Fact;