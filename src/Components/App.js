import './App.css';
import Statistics from './Statistics/Statistics';
import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  setValue = e => {
    console.log(e.target.name);
    this.setState(prev => ({ [e.target.name]: prev[e.target.name] + 1 }));
  };

  render() {
    return (
      <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        setValue={this.setValue}
      />
    );
  }
}

export default App;
