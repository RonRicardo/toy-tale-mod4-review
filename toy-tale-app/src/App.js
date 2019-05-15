import React, { Component } from 'react';
import ToyContainer from './ToyContainer';
import './index.css';
class App extends Component {
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
