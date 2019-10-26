import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleEditing, updateTitle } from "../actions/title";

const Title = props => {
  const [newTitle, setNewTitle] = useState("");

  const handleChanges = e => {
    setNewTitle(e.target.value);
  };

const handleEdit = e => {
    e.preventDefault();
    props.toggleEditing();
  };

const handleSubmit = e => {
  e.preventDefault();
  setNewTitle("");

  props.updateTitle(newTitle || props.title);
  props.toggleEditing();
}

props.updateTitle(newTitle || props.title);

return (
    <div>
      {props.editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="newTitle"
            placeholder={props.title}
            value={newTitle}
            onChange={handleChanges}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <h1>{props.title}</h1>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state) {
    return {
      title: state.title.title,
      editing: state.title.editing
    };
  }

  const mapDispatchToProps = {
    updateTitle,
    toggleEditing
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Title);