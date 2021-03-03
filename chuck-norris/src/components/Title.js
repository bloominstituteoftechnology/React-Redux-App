import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateTitle, toggleEditing } from "../actions";

const Title = (props) => {
    const [titleText, setTitleText] = useState('');

    const handleChange = e => {
        setTitleText(e.target.value)
    }

    return (
        <div>
          {!props.editing ? (
            <h1>
              {props.title}{" "}
              <i onClick={() => props.toggleEditing()} className="far fa-edit" />
            </h1>
          ) : (
            <div>
              <input
                type="text"
                name="titleText"
                value={titleText}
                onChange={handleChange}
              />
              <button
                onClick={() => {
                  props.updateTitle(titleText) }}>
                Update title
              </button>
            </div>
          )}
        </div>
      );
    };
    
    // Redux step 3: connect components
    
    const mapStateToProps = (state) => {
      return {
        editing: state.editing,
        title: state.title
      }
    };
    
    const mapDispatchToProps = { updateTitle, toggleEditing };
    
    export default connect(mapStateToProps, mapDispatchToProps)(Title);
    
    // connect(mapStateToProps,mapDipatchToProps) returns a decorator function
    // We then invoke that decorator on Title
    // and magically, Title can now read from and write to the store