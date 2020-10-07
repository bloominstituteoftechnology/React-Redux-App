import React from "react";
import { Formik, Form, Field } from "formik";

const SearchForm = ({ getInputValue }) => {
  return (
    <div className="search-form">
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values, { resetForm }) => {
          getInputValue(values.search);
          resetForm();
        }}
      >
        {() => (
          <Form>
            <label htmlFor="search">
              <Field
                type="text"
                name="search"
                id="search"
                placeholder="Search Cocktail"
              />
            </label>
            <button type="submit">Search</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
