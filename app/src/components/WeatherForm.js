import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchWoeid } from "../store/actions";
const initialFormValues = "";
const WeatherForm = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleChange = (e) => {
    setFormValues(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchWoeid(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Location
        <input
          type="text"
          onChange={handleChange}
          value={formValues}
          placeholder="Kansas City"
        />
        <input type="submit" />
      </label>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    woeid: state.woeid,
  };
};
export default connect(mapStateToProps, { fetchWoeid })(WeatherForm);
