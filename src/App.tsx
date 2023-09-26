import React, {Component} from 'react';

type State = {
  name: string;
}

export default class App extends Component {
  state: State = {
    name: "Amri"
  }

  updateName = () => {
    this.setState({
      name: "Guswandi"
    })
  }

  render(){
    return(
      <React.Fragment>
        <div>{this.state.name}</div>

        <button onClick={this.updateName}>Manipulate</button>
      </React.Fragment>
    )
  }

}