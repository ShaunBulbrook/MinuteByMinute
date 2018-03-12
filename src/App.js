import React, { Component } from 'react';
import logo from './logo.svg';

import Button from './components/Button/Button';
import TextInput from './components/TextInput/TextInput';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MinuteByMinute</h1>
        </header>
		<TextInput labelText="New Meeting" onChange={this.recordOnChange} />
		<Button onClick={this.recordClick}>BEGIN</Button>
      </div>
    );
  }
  recordOnChange (e) {
	  console.log(e);
  }
  recordClick (e) {
	  console.log(e);
	  console.log('isjdfoijasofidj');
  }
}

export default App;
