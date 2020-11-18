import React, {useState} from 'react'
import {loadAoeData} from '../reducers/index';

const SearchForm = (props) => {

    const [civName,setCivName] = useState("")
    const handleChange = (e) =>{
        setCivName(e.target.value)
    }
    return (
        <div>
            <form>
                <label htmlFor="civName">Civilization Name: 
                    {' '}<input 
                        type="text"
                        name="civName"
                        id="civName"
                        onChange={handleChange} //change
                        placeholder="Enter Civilization Name"
                        value={civName} //change
                    />
                </label>
            </form>
        </div>
    )
}

export default SearchForm
