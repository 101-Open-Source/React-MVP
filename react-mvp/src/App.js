import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
 constructor(props) {
   super(props);

   this.state = {
   input: ""
  };
 }
 
 handleClick() {
  console.log('Click happened');
}
onChange(e) {
  e.preventDefault();


}
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       <input type='text' placeholder='send me' /><br/>
       <button onClick={this.handleClick}> Submit</button>
      </header>
    </div>
  );
}
}
export default App;
