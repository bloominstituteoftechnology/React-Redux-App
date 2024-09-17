import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleEditing, updateTitle } from "../actions";

const Title = ({ editing, title, toggleEditing, updateTitle }) => {
  const [newTitleText, setNewTitleText] = useState("");

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!editing ? (
        <h1>
          {title} <i onClick={() => toggleEditing()} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              updateTitle(newTitleText);
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { title: state.title, editing: state.editing };
};

const mapDispatchToProps = { toggleEditing, updateTitle };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title);
