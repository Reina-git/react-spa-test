import React from "react";
import axios from "axios";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    const initialCounterState = 0;
    this.state = {
      counter: initialCounterState,
      apiData: "",
    };
  }
  increaseCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
    console.log("counter", this.state.counter);
  }
  getApi() {
    axios
      .get("https://randomuser.me/api")
      .then((res) => {
        // handle success
        this.setState({
          apiData: JSON.stringify(res.data.results),
        });
        // console.log("state", this.state.apiData);

        // console.log("res.data", res.data);
        const copyOfApiData = [this.state.apiData];
        // console.log("copy of api data", copyOfApiData);
        const updatedApiData = copyOfApiData.concat(this.state.apiData);
        // console.log("api data", this.state.apiData);

        console.log("updated api data", updatedApiData);
        // return JSON.stringify(res.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.increaseCounter();
          }}
        >
          Button with counter {this.state.counter}
        </button>
        <button
          onClick={() => {
            this.getApi();
          }}
        >
          Get API {this.state.counter}
        </button>

        <p>{this.state.apiData}</p>
      </div>
    );
  }
}
