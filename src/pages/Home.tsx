import React from "react";

import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <center>
            <h1>
              Materi Front-End menggunakan React TypeScript dan Class Component
            </h1>
            <Link to="/components">
              <h1>Components</h1>
            </Link>
            <Link to="/state">
              <h1>State</h1>
            </Link>
            <Link to="/props">
              <h1>Props</h1>
            </Link>
            <Link to="/fetch-api">
              <h1>Fetch API + Lifecycle Materials</h1>
            </Link>
          </center>
        </div>
      </React.Fragment>
    );
  }
}
