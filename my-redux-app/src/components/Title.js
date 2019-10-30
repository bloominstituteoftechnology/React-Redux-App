import React from "react";
import { connect } from "react-redux";
import { song } from '../action/songs';

function Title(props) {

return (
    <div>
    {
      props.titles.map(title => {
        return (
          <div key={title.id} >
            <h1>{title.name}</h1>
          </div>
        )
      })
    }  
    </div>
  );
};

function mapStateToProps(state) {
    return {
      title: state.title,
      editing: state.title.editing
    };
  }

  const mapDispatchToProps = {
    song
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Title);