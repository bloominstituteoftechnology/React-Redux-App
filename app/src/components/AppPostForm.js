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
        <form>
          <div>
            <label>Title: </label>
            <br />
            <input type="text" name="title" />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea name="body" />
            <br />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AppPostForm;
