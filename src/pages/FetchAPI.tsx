import React from "react";

import withRouter from "./withRouter";

interface Data {
  name: string;
  username: string;
  email: string;
}

interface State {
  data: Data[] | null;
}

class FetchAPI extends React.Component<
  { value?: string | null; params?: { id: string } | null },
  State
> {
  constructor(props: { value: "" }) {
    super(props);
    this.state = {
      data: null,
    };
  }

  // lifecycle
  componentDidMount() {
    const id = this.props.params!.id;
    this.fetchData(id);
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

  fetchData(id: string | null) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
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

export default withRouter(FetchAPI);
