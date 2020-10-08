import React, { useEffect } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { fetchHolidays } from "../actions";

const List = (props) => {
  const { fetchHolidays, url } = props;

  useEffect(() => {
    fetchHolidays(url);
  }, [fetchHolidays, url]);

  return (
    <div>
      <h2>this is the List</h2>
      {props.holidays.map((item) => (
        <Card key={item.date} holiday={item} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    holidays: state.holidays,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchHolidays })(List);
