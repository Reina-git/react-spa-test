import React from "react";
import axios from "axios";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    const initialCounterState = 0;
    this.state = {
      counter: initialCounterState,
      apiData: [],
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
        const apiData = res.data;
        this.setState({
          apiData: apiData,
        });
        console.log("apiDate", apiData);
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
            this.getApi();
          }}
        >
          Button with counter {this.state.counter}
        </button>
        <p>{this.state.apiData[0]}</p>
      </div>
    );
  }
}
