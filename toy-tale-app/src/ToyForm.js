import React from "react";

const ToyForm = (props) => (
    <div>
      <form className="add-toy-form" onSubmit={props.handleSubmit} >
        <h3>Create a toy!</h3>
        <input type="text" name="name" placeholder="Enter a toy's name..." className="input-text"/>
        <input type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
        <br/><input type="submit" name="submit" value="Create New Toy" className="submit"/>
      </form>
    </div>
);

export default ToyForm
