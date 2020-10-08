import React, { useState } from "react";

const Form = () => {
  const [searchYear, setSearchYear] = useState("2020");

  const changeHandle = (event) => {
    setSearchYear(event.target.value);
  };

  return (
    <div>
      <h2>this is the form</h2>
      <form onSubmit={}>
        <input
          name="year"
          type="text"
          value={searchYear}
          onChange={changeHandle}
          placeholder="enter year"
        />
        <button>get holidays</button>
      </form>
    </div>
  );
};

export default Form;
