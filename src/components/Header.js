import React from 'react'
import styled from 'styled-components'

import SearchForm from './SearchForm'

const StyledHeader = styled.div`
h2 {
    padding: 2rem 0;
    margin: 1rem 0;
}
`

const Header = () => {

    return (
        <StyledHeader>
            <h2>My Pokemon List</h2>
            <SearchForm />
        </StyledHeader>
    )

}

export default Header