import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

const SearchContainer = styled.div`
    height: 87.5vh;
    width: 1024px;
    margin: 0 auto;
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .stock {
        h1 {
            font-size: 36px;
        }

        h2 {
            font-size: 32px;
        }

        .price {
            display: flex;
            align-items: center;
        }

        .close {
            margin-right: 8px;
            font-size: 43px;
        }

        .currency {
            margin-right: 8px;
            font-size: 32px;
        }

        .difference {
            font-size: 24px;
        }

        .last-updated  {
            font-size: 16px;
            font-weight: 600;
        }

        .previous-close {
            margin-bottom: 16px;
            font-size: 16px;
            font-weight: 600;
        }

        h4 {
            margin-bottom: 8px;
            font-size: 20px;
        }

        p {
            font-size: 16px;
            font-weight: 600;
        }
    }
`

const Search = props => {
    const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');
    const twoDaysAgo = moment().subtract(2, 'days').format('YYYY-MM-DD');
    
    return (
        <SearchContainer>
            {props.data &&
                <div className='stock'>
                    <p className='last-updated'>Last Updated: {props.data['Meta Data']['3. Last Refreshed']}</p>
                    <h1>Market Summary > {props.data['Meta Data']['2. Symbol']}</h1>
                    <h2>NYSE: {props.data['Meta Data']['2. Symbol']}</h2>
                    <div className='price'>
                        <h3 className='close'>{Number(props.data['Time Series (Daily)'][yesterday]['4. close']).toFixed(2)}</h3>
                        <h3 className='currency'>USD</h3>
                        <h3 className='difference'>{Number(props.data['Time Series (Daily)'][yesterday]['4. close'] - props.data['Time Series (Daily)'][twoDaysAgo]['4. close']).toFixed(2)}</h3>
                    </div>
                    <p className='previous-close'>Previous Close: {Number(props.data['Time Series (Daily)'][twoDaysAgo]['4. close']).toFixed(2)}</p>
                    <h4>Today</h4>
                    <p>Open: {Number(props.data['Time Series (Daily)'][yesterday]['1. open']).toFixed(2)}</p>
                    <p>High: {Number(props.data['Time Series (Daily)'][yesterday]['2. high']).toFixed(2)}</p>
                    <p>Low: {Number(props.data['Time Series (Daily)'][yesterday]['3. low']).toFixed(2)}</p>
                    <p>Close: {Number(props.data['Time Series (Daily)'][yesterday]['4. close']).toFixed(2)}</p>
                    <p>Volume: {props.data['Time Series (Daily)'][yesterday]['5. volume']}</p>
                </div>
            }
            {props.error && <h2>There was an error...</h2>}
        </SearchContainer>
    );
};

const mapStateToProps = state => {
    return {
        data: state.data,
        fetching: state.fetching,
        error: state.error
    };
};

export default connect(mapStateToProps)(Search);