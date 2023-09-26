import React from "react";
import Dukungan from "../components/Dukungan";

class Components extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Pace Kobo</h1>
        <Doxxing />
        <Dukungan />
      </React.Fragment>
    );
  }
}

class Doxxing extends React.Component {
  render() {
    return <h1>Pace Kobo aseli papua</h1>;
  }
}

export default Components;
