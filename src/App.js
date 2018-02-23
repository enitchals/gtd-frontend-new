import React, { Component } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import GuestView from './Components/GuestView';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    };

  render() {
    const guestView = <GuestView appState={this.props.appState} setAppState={this.props.setAppState}/>
    const home = <Home appState={this.props.appState} setAppState={this.props.setAppState}/>

    return (
      <div className="App column">
        <Header/>
        {this.props.appState.userID === "" ? guestView : home}
      </div>
    );
  };
}

export default App;
