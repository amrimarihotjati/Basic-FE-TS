import React from "react";

export default class Props extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>Partai</div>
        <Partai partai={"Partai Demokrat Indonesia Perjuangan"} />
      </React.Fragment>
    );
  }
}

class Partai extends React.Component<{ partai?: string }, { value: string }> {
  render() {
    // destructured props
    const { partai } = this.props;

    // default props
    // const { partai = "PDIP" } = this.props;

    return (
      <>
        <div>
          <h1>{partai}</h1>
        </div>
      </>
    );
  }
}
