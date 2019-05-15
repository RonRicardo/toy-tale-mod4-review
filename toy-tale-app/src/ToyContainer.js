import React from 'react';
// import App from './App';
import ToyCard from './ToyCard'

function ToyContainer(props) {
    return (
        props.allToys.map(toy => <ToyCard singleToy={toy} handleLike={props.handleLike}/>)
    )


}

export default ToyContainer