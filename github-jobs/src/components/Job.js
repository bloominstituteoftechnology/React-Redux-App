import React from 'react';

function Job({ job }) {
  return (
    <div className="job">
      <h4>{job.title}</h4>
      { job.company_logo
          ? <div><img
            src={job.company_logo} 
            alt={`${job.company} logo`}
            style={{ maxWidth: '250px' }}
          /></div>
        : null
      }
      <p><strong>Type:</strong> {job.type}</p>
      <p>Company: {job.company}</p>
      <p>Location: {job.location}</p>
      <p>Description:</p>
      {job.description}
      {job.how_to_apply}
    </div>
  );
}

export default Job;
