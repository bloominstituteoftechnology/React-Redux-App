import React from 'react';

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { getCat } from '../actions/catActions';


const CatText = styled.p`

    font-family: fantasy
`
const CatHeader = styled(CatText)``

const CatDiv = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    // align-items: center;
    // width: 500px;  this actually interfeered with the flex box
    max-width: 900px;
    // border: 1px solid #BADA55;
    margin: 0 auto;
`

const CatImage = styled.img`

    max-width: 100%;
`

const GetCatButon = styled.button`

    margin: 100px auto;

`

const Cat = props => {

    return (
        <div>
            <CatHeader>Cat Image</CatHeader>
            {!props.cat && !props.isFetching && <CatText>Go ahead! Fetch a Cat</CatText>}
            {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )}
            <CatDiv>
                {props.cat && <CatImage src={props.cat}/>}
            </CatDiv>

            <GetCatButon onClick={props.getCat}>Get Cat!</GetCatButon>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cat : state.cat,
        isFetching : state.isFetching,
        error : state.error
    }
}

export default connect(
    mapStateToProps,
    { getCat }
)(Cat)