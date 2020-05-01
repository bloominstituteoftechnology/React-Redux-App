import React from 'react'
import { connect } from "react-redux";

import { getPerson, FETCHING_PERSON_SUCCESS } from "../actions/IndexAction";

import './person.style.css'

const Person = ({ getPerson, person, isFetching, error }) => {
    console.log('Person.js: ', person)

    if (isFetching) {
        return <h2 className='no-person'>Building person now</h2>;
    } else {
        return (
            <div>
                <button className='btn' onClick={getPerson}>Build Person</button>
                {person === null ? (
                    <h1 className='no-person'>Click Build Person to build a person</h1>
                ) : (
                        <div className='person-box'>
                            <h1 className='name-header'>{person.name.title} {person.name.first} {person.name.last}</h1>
                            <div className='top-section'>
                                <img className='person-image' src={person.picture.large} alt='Image of Person' />
                                <div className='top-right'>
                                    {/* <p>Name: {person.name.title} {person.name.first} {person.name.last}</p> */}
                                    <p>Gender: {person.gender}</p>
                                    <p>Dob: {person.dob.date.slice(0, 10)} </p>
                                    <p>Age: {person.dob.age} years old</p>
                                    <p>Username: {person.login.username}</p>
                                </div>
                            </div>
                            <div className='bottom-section'>
                                <div className='address-box'>
                                    <p className='address-text'>Address:</p>
                                    <div className='address-right'>
                                        <p>{person.location.street.number} {person.location.street.name}</p>
                                        <p> {person.location.city} {person.location.state}, {person.location.country} {person.location.postcode}</p>
                                    </div>
                                </div>
                                <div className='contact'>
                                    <h3>Contact Info</h3>
                                    <p>Email: {person.email} </p>
                                    <p>Phone: {person.phone} </p>
                                    <p>Cell: {person.cell} </p>
                                </div>
                                <p>Registered since: {person.registered.date.slice(0, 10)} </p>
                                <p>Member for: {person.dob.age - person.registered.age} years</p>
                            </div>
                        </div>
                    )}
            </div>
        );
    }
};

const mapStateToProps = state => {
    // console.log('Person.js mapStateToProps: ', state)
    return {
        person: state.person,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getPerson })(Person)
