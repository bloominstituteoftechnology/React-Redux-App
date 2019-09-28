import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Job from './Job';
import { getJobs } from '../actions';

function JobList({ getJobs, jobs, isFetching, error }) {
  useEffect(() => {
    getJobs();
  }, [getJobs]);

  if(isFetching) {
    return <h2 className="loading-header">... fetching jobs ...</h2>
  }

  return (
    <div className="joblist">
      { jobs.map( job => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  jobs: state.jobs,
  error: state.error
})

export default connect(
  mapStateToProps,
  { getJobs }
)(JobList);
