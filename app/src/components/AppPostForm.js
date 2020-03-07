import React, { Component } from "react";

class AppPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
      </div>
    );
  }
}

export default AppPostForm;
