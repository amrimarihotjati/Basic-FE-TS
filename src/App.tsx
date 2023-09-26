import React from 'react';


interface FormState{
  nama: string;
  umur: number;
  alamat: string;
}

interface PriceState {
  price: number;
}

export default class App extends React.Component<PriceState, FormState>{

  public static defaultProps = {
    price: 23000,
  }

  render(){
    return(
      <React.Fragment>
        <div>{App.defaultProps.price}</div>
      </React.Fragment>
    )
  }
}