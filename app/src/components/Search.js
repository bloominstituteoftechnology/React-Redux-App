import React, {useState} from "react"
import {connect} from "react-redux"

import {loadData} from "../actions"

const Search = (props) => {
    const [date, setDate] = useState("2020-11-17")


const handleChange = (e) => {
    setDate(e.target.value)
}

const handleClick = (e) => {
    e.preventDefault()

    props.loadData(date) //need action here

}

return (
    <div>
        <input value={date} onChange={handleChange} />
        <button onClick={handleClick}>Enter</button>
    </div>
)
}

const mapStateToProps = state => ( { } )

export default connect(mapStateToProps, {loadData})(Search)