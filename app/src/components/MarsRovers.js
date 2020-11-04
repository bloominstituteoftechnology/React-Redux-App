import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

import { fetchRovers } from '../store/actions/';

const MainStyle = Styled.div`
.MainContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 6%;

    p {
        text-transform: uppercase;
        padding: 0;
    }

    img {
        
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        border: none;
    }
}
`;

const InfoStyle = Styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0 12%;
margin: 0;
`;

const TitleStyle = Styled.div`
text-align: center;
.Title {
    text-transform: uppercase;
}
`;

const RoversList = (props) => {
    useEffect(() => {
        props.fetchRovers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <TitleStyle>
            <h2 className='Title'>Mars Rovers</h2>
            </TitleStyle>
            {props.isLoading ? <p>Loading Rover Data...</p> : null}
            {props.data.map((item) => (
                <MainStyle>
                <div className='MainContainer' key={item.id}>

                    <InfoStyle>
                    <div>
                        <p>image id: {item.id}</p>
                    </div>
                    <div>
                        <p>Rover Id: {item.camera.rover_id}</p>
                    </div>
                    <div>
                        <p>Date Taken: {item.earth_date}</p>
                    </div>
                    <div>
                        <p>Launch Date: {item.rover.launch_date}</p>
                    </div>
                    <div>
                        <p>Landing Date: {item.rover.landing_date}</p>
                    </div>
                    <div>
                        <h4>Rover: {item.rover.name}</h4>
                    </div>
                    <div>
                        <h4>Status: {item.rover.status}</h4>
                    </div>
                    </InfoStyle>

                    <div>
                        <img src={item.img_src} alt='RoverImage' />
                    </div>
                </div>
                </MainStyle>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        data: state.data
    }
}

export default connect(mapStateToProps, { fetchRovers })(RoversList);