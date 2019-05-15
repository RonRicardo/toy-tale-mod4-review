import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import ToyContainer from './ToyContainer';
import toys from './resources/toys';
import './index.css';
class App extends Component {
  
  constructor() {
    super()
    this.state= {
      allToys: toys}
  
  }
  
  handleLike= (e)=> {
    let newList = this.state.allToys.map(toy => {
      if (toy.id == e.target.parentElement.id) {
        toy.likes += 1
        return toy
      } else {
        return toy
      }
    })
    this.setState({
      allToys: newList
    })
  }
  
  // handleAdd= () => {
  //   addToy = !addToy
  //   if (addToy) {
  //     toyForm.style.display = 'block'
  //   } else {
  //     toyForm.style.display = 'none'
  //   }
  // }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          
        </header>
        <body className="App-Body">
          <div id='toy-header'>
            <img src="https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png" alt="toy-header" />
          </div>
          <div className="container">
            <form className="add-toy-form" >
              <h3>Create a toy!</h3>

              <input type="text" name="name" value="" placeholder="Enter a toy's name..." className="input-text"/>
               
              <input type="text" name="image" value="" placeholder="Enter a toy's image URL..." className="input-text"/>
                   
              <input type="submit" name="submit" value="Create New Toy" className="submit"/>
            </form>
            </div>
          <p>Andy needs your help! <button id='new-toy-btn'>Add a new toy!</button></p>


          <ToyContainer allToys={this.state.allToys} handleLike={this.handleLike}/>
        </body>
      </div>
      
    );
  }
}



export default App;
