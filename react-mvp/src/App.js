import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
const $ = window.$;


class App extends Component {
 constructor(props) {
   super(props);

   this.state = {
   username: "",
 

  };

  this.handleChange = this.handleChange.bind(this)

 }
 
 handleClick() {
  console.log('Click happened');
  var data = this.state
  $.ajax({
    type: "POST",
    url: "/sending-username-to-server",
    timeout: 2000,
    data: data,
    success: function(data) {
        //show content
        alert('Success!')
    },
    error: function(jqXHR, textStatus, err) {
        //show error message
        alert('text status '+textStatus+', err '+err)
    }
});
}



handleChange(event) {
  this.setState({username : event.target.value})
  console.log(this.state)
}



  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <input 
       type='text' 
       name="name" 
       placeholder='send me'
       username={this.state.username}
       onChange={this.handleChange} />
        <br/>
       <button onClick={this.handleClick}> Submit</button>
      </header>
    </div>
  );
}
}
export default App;
