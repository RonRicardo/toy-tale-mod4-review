import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ToyContainer from './ToyContainer';
import toys from './resources/toys';
import './index.css';
class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body className="App-Body">
          <div id='toy-header'>
            <img src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png" alt="toy-header" />
          </div>
          <ToyContainer />
        </body>
      </div>

    );
  }
}



export default App;
