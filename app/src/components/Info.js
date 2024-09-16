import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchData } from "../store/actions/actions";

const Info = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  const lSite = props.launch_site && props.launch_site.site_name_long;
  const rocketName = props.data.rocket && props.data.rocket.rocket_name;
  return (
    <div className='text-center text-dark font-weight-bold bg-primary p-5'>
      <h1>Latest SpaceX Launch Data</h1>
      <p className='pt-3'>
        Mission Name:{" "}
        <span className='font-weight-bolder'>{props.data.mission_name}</span>
      </p>
      <p>
        Rocket Name: <span className='font-weight-bolder'>{rocketName}</span>
      </p>
      <p>
        Flight Number:{" "}
        <span className='font-weight-bolder'>{props.data.flight_number}</span>
      </p>
      <p>
        Launch Site: <span className='font-weight-bolder'>{lSite}</span>
      </p>
      <p>
        Local Launch Time:{" "}
        <span className='font-weight-bolder'>
          {props.data.launch_date_local}
        </span>
      </p>
      <p className='text-justify'>{props.data.details}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.reducer.data,
    launch_site: state.reducer.data.launch_site,
    isFetching: state.reducer.isFetching,
    error: state.reducer.error,
  };
};

export default connect(mapStateToProps, { fetchData })(Info);