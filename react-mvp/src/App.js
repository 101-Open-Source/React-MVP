import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// const $ = window.$;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",


    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this)

  }

  //  handleClick() {
  //   //  console.log(this.state)
  //   console.log('Click happened');

  //   $.ajax({
  //     type: "POST",
  //     url: "localhost:3305/sending-username-to-server",
  //     timeout: 2000,
  //     data: this.state ,
  //     success: function(data) {
  //       console.log(data)
  //         //show content
  //         alert('Success!')
  //     },
  //     error: function(jqXHR, textStatus, err) {
  //         //show error message
  //         alert('text status '+textStatus+', err '+err)
  //     }
  // });
  // }
  handleSubmit() {
    var data = this.state
    // event.preventDefault();
    // var data = this.state


    // const options = {
    //   method: 'post',
    //   url: 'http://localhost:3305/sending-username-to-server',
    //   data: {
    //     username: this.state.username

    //   },
    //   transformRequest: [(data, headers) => {
    //     // transform the data

    //     return data;
    //   }]
    // }
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:3305/sending-username-to-server',
    //   body: { data },
    //   headers: { 'Content-Type': 'application/json' }
    //   // transformRequest: [(data, headers) => {
    //   //   // transform the data
    //   //   return data;
    //   // }]
    // });

    axios.post('http://localhost:3305/sending-username-to-server', {
      data: data
    })
      .then(() => console.log('success'))
      .catch(error => console.log(error))

    // const data = this.state.username
    // console.log(data)
    // axios.post('http://localhost:3305/sending-username-to-server', data)
    //     .then(res => console.log(res.body.data))

    // .then(this.setState({ username: '' }))
  }


  // fetch('http://localhost:3305/sending-username-to-server', {
  //  method: 'post',
  //  headers: {'Content-Type':'application/json'},
  //  body: {
  //   "username": this.state.username
  //  }
  // });





  onchange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state)
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
            type='text'
            name="username"
            placeholder='send me'
            onChange={this.onchange.bind(this)}
          />
          <br />
          <button
            //onClick={this.handleClick}
            onClick={this.handleSubmit.bind(this)}> Submit</button>
        </header>
      </div>
    );
  }
}
export default App;
