import React, { Component } from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";

class App extends Component {
  state = {
    algorithm: null,
  };

  handleAlgorithmChange = (e) => {
    this.setState({ algorithm: e });
  };

  handleRandomise = () => {
    console.log(this.state.algorithm);
  };

  render() {
    const { algorithm } = this.state;
    return (
      <div className="app">
        <Header
          handleAlgorithmChange={this.handleAlgorithmChange}
          handleRandomise={this.handleRandomise}
          algorithm={algorithm}
        />
        <Body />
      </div>
    );
  }
}

export default App;
