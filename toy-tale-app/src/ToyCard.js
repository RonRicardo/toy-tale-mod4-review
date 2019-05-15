import React from 'react';

function ToyCard(props) {
    return(
        <div className="card" id={props.singleToy.id}>
            <h2 className="toy-name">{props.singleToy.name}</h2>
            <img className="toy-avatar" src={props.singleToy.image} alt=" "/>
            <p className="toy-likes">{props.singleToy.likes} Likes</p>
            <button className="lkBtn" onClick={(e)=>props.handleLike(e)}>Like</button>
        
        </div>
    )

}

export default ToyCard