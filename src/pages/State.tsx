import React, { Component } from "react";

// Variables
// let doksli: string = "Kaela Esport";
// console.log(doksli);

// function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
//   event.preventDefault();

//   doksli = "Kaela dulunya player Esport";
//   console.log(doksli);
// }

// ngebangun tipe data dari object state nya
type State = {
  doksli: string;
};

export default class UseState extends Component<
  { value?: null | undefined },
  State
> {
  state = {
    doksli: "Kaela Esport",
  };

  updateDoksli = () => {
    this.setState({
      doksli: "Kaela dulunya player Esport",
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.state.doksli}</div>

        <button onClick={this.updateDoksli}>Beri Informasi Baru!</button>
      </React.Fragment>
    );
  }
}
