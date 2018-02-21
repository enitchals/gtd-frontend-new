import React, { Component } from 'react';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    };

  render() {
    const guestView = (
      <div>
        <Login appState={this.props.appState} setAppState={this.props.setAppState}/>
        <SignUp/>
      </div>
    );
    
    const home = <Home appState={this.props.appState} setAppState={this.props.setAppState}/>

    return (
      <div className="App">
        {this.props.appState.userID === "" ? guestView : home}
      </div>
    );
  };
}

export default App;
