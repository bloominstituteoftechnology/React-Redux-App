import React from "react";

function Job({ job }) {
  return (
    <div className="job">
      <h4>{job.title}</h4>
      {job.company_logo ? (
        <div>
          <img
            src={job.company_logo}
            alt={`${job.company} logo`}
            style={{ maxWidth: "250px" }}
          />
        </div>
      ) : null}
      <p>
        <strong>Type:</strong> {job.type}
      </p>
      <p>
        <strong>Company:</strong> {job.company}
      </p>
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      <p style={{ maxWidth: "100px" }}>
        <strong>URL: </strong>
        <a
          href={`${job.url}`}
          style={{
            textDecoration: "none",
            color: "inherit"
          }}
        >
          {job.url}
        </a>
      </p>
    </div>
  );
}

export default Job;
