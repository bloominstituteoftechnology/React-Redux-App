import React from 'react'

const SearchForm = (props) => {
    return (
        <div>
            <form>
                <label htmlFor="civName">
                    <input 
                        type="text"
                        name="civName"
                        id="civName"
                        onChange="change" //change
                        value="value" //change
                    />
                </label>
            </form>
        </div>
    )
}

export default SearchForm
