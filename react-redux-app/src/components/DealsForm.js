// Import Dependencies
import React, { useState } from "react";
import { connect } from "react-redux";

// Import Actions
import { loadDataForLocation } from "../store/actions/index";

function DealsForm(props) {
  // Set an initial state
  const initalState = {
    minPrice: "",
    maxPrice: "",
  };

  // Set the states for Min/Max Price
  const [getDeal, setGetDeal] = useState(initalState);

  // Handle input change
  const handleChange = (e) => {
    setGetDeal({ ...getDeal, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmission = (e) => {
    e.preventDefault();

    props.loadDataForLocation(getDeal);
  };

  return (
    <div>
      <form onSubmit={handleSubmission}>
        <input
          type='number'
          name='minPrice'
          placeholder='Enter Min Price'
          onChange={handleChange}
          value={getDeal.minPrice}
        />

        <input
          type='number'
          name='maxPrice'
          placeholder='Enter Max Price'
          onChange={handleChange}
          value={getDeal.maxPrice}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default connect("", { loadDataForLocation })(DealsForm);
