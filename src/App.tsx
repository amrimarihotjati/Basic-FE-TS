import React from "react";
import Test from "./Test";
import Dukungan from "./components/Dukungan";


class App extends React.Component{
  
  render(){
    return(
      <React.Fragment>
        <h1>Bismillah</h1>
        <Test/>
        <AnotherComponent/>
        <Dukungan/>
      </React.Fragment>
    )
  }

}

class AnotherComponent extends React.Component{
  render(){
    return(
      <h1>Ini dari komponen lain</h1>
    )
  }
}


export default App;