import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

const CovidTracker = () => {
    const { data, loading } = useSelector(state => state);
    
    return (
        loading ? <CircularProgress /> :
        <div>
            Covid Tracker
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default CovidTracker
