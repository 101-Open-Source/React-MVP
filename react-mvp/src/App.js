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
    this.onclick = this.onclick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onclick() {
    var data = this.state;

    axios
      .post("http://localhost:3305/sendingUsername", {
        username: this.state.username
      })
      .then(() => console.log("success"))
      .catch(error => console.log(error));
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
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
          <button onClick={this.onclick}> Submit</button>
        </header>
      </div>
    );
  }
}
export default App;
