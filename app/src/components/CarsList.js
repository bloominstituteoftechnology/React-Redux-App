import React from 'react';
import {connect} from 'react-redux';
import { getCars } from '../action';

const CarsList = props =>{
    const fetchCars = e => {
        e.preventDefault();
        props.getCars();
    };

return (
    <>
    <h2>Welcome to Brazil</h2>
    {props.isFetching && <p>Finding Car List</p>}
    <div>
        {props.vehicle.map(vehicle => (
            <h3 key={vehicle.codigo}>{vehicle.nome}</h3>
        ))}
        
    </div>
    {props.error && <p className='error'>{props.error}</p>}
    <button onClick={fetchCars}>Show Me Brazilian Cars</button>
    </>
);
};

const mapStateToProps = state => ({
    vehicle: state.vehicle,
    error: state.error,
    isFetching: state.isFetching
});

export default connect(
    mapStateToProps,
    { getCars }
    )(CarsList);
