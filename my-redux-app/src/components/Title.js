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
            <h2>{title.name}</h2>
            <h2>{title.artist}</h2>
            <h3>{title.lyrics}</h3>

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
    };
  }

  const mapDispatchToProps = {
    song
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Title);