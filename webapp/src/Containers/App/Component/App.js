import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {}
  }

  componentWillMount() {
    console.log('COMPONENT WILL MOUNT!')
    this.props.fetchUsers()
  }
  componentDidMount() {
      console.log('COMPONENT DID MOUNT!')
  }
  componentWillReceiveProps(newProps) {    
      console.log('COMPONENT WILL RECIEVE PROPS!')
  }
  shouldComponentUpdate(newProps, newState) {
      return true;
  }
  componentWillUpdate(nextProps, nextState) {
      console.log('COMPONENT WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
      console.log('COMPONENT DID UPDATE!')
  }
  componentWillUnmount() {
      console.log('COMPONENT WILL UNMOUNT!')
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
