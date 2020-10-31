import React from "react";
import { Link } from "react-router-dom";
import 'rsuite/dist/styles/rsuite-default.css';
import { Button } from "rsuite";

const Welcome = () => {
  return (
    <>
      <div className="home">
        <h1 className="title">SpaceX Docs</h1>
        <div className="intro">
          <p> Learn more about SpaceX and their achievements in aerospace
            engineering. All data was gathered from the {" "} <a className="api" href="https://docs.spacexdata.com/?version=latest"> SpaceX API</a>.</p>

          <Link to="/info">
            <Button appearance="primary">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
