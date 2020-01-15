import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit() {
    var data = this.state;
    console.log(data);

    axios
      .post("http://localhost:3305/sending-username-to-server", {
        username: this.state.username
      })
      .then(() => console.log("success"))
      .catch(error => console.log(error));
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <input
            type="text"
            name="username"
            placeholder="send me"
            onChange={this.onChange}
          />
          <br />
          <button onClick={this.handleSubmit}> Submit</button>
        </header>
      </div>
    );
  }
}
export default App;
