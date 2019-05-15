import React, { Component } from 'react';
import toys from './resources/toys.js'
import ToyCard from './ToyCard'
import ToyForm from './ToyForm'

class ToyContainer extends Component {
  constructor() {
    super()
    this.state = {
      allToys: toys
    }
  }

  handleLike = (id) => {
    let newList = this.state.allToys.map(toy => {
      if (toy.id == id) {
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

  handleSubmit = (event) => {
    let singleToy = {
      name: event.target[0].value,
      image: event.target[1].value,
      likes: null
    }
    // this.setState((state) => {
    //   let newToyList = state.allToys
    //   newToyList.push(singleToy)
    //   return {allToys: newToyList}
    // })
    this.setState({
      allToys: [...this.state.allToys, singleToy]
    })
    event.preventDefault()
  }

    render(){
      return (
        <div>
          <ToyForm handleSubmit={this.handleSubmit}/>
          {this.state.allToys.map(toy => <ToyCard handleLike={this.handleLike} singleToy={toy}/>)}
        </div>
      )
    }
}

export default ToyContainer
