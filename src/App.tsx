import React from "react";

interface Data {
  name: string;
  username: string;
  email: string;
}

interface State {
  data: Data[] | null;
}

export default class App extends React.Component<{ value?: string }, State> {
  constructor(props: { value: "" }) {
    super(props);
    this.state = {
      data: null,
    };
  }

  // lifecycle
  componentDidMount() {
    this.fetchData();
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  componentWillUnmount() {
    alert("Fetching data has been added successfully.");
    console.log("Unmounted");
  }
  // end of lifecycle

  fetchData() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const dataArray = Array.isArray(data) ? data : [data];
        this.setState({ data: dataArray });
      })
      .catch((error) => {
        alert(`Error fetching: ${error}`);
      });
  }

  render() {
    const { data } = this.state;

    return (
      <React.Fragment>
        <div>
          {data &&
            data.map((data) => (
              <div>
                <h1>{data?.name}</h1>
                <h3>{data?.username}</h3>
                <p>{data?.email}</p>
                <hr />
              </div>
            ))}
        </div>
      </React.Fragment>
    );
  }
}