import React, {useState} from 'react'
import { Button, Form } from "semantic-ui-react";
import { connect } from 'react-redux'
import { searchFeature, SEARCH_TERM } from '../store/actions/formActions'

function UserForm(props) {
    const [formValues, setFormValues] = useState({
        cityName:""
    })

    const submitHandler = (event) => {
        event.preventDefault()
        props.searchFeature(formValues)
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormValues({
            [name]: value
        })
    }

    return (
        <Form style={{width:"400px"}} onSubmit={submitHandler}>
            <Form.Field>
                <label>City Name:</label>
                <input 
                    placeholder="Enter your city name."
                    type="text"
                    name="cityName"
                    onChange={handleChange}
                    value={formValues.cityName}
                />
            </Form.Field>
            <Button color="teal" type="submit">Search</Button>
        </Form>
    )
}

const mapStateToProps = (state) => {
    return {
        cityName: state.masterReducer.cityName
    }
}

export default connect(mapStateToProps, {searchFeature})(UserForm)
