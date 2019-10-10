import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../actions/actions";

const User = props => {
  console.log(props.user);
  useEffect(() => {
    props.getUser();
  }, []);
  return (
    <div>
      <img className="userImage" src={props.user.avatar_url} alt="pic" />
      <div className="userInfo">
        <h1 className="userName">{props.user.name}</h1>
        <em className="userBio">{props.user.bio}</em>
        <p>Location:{props.user.location}</p>
        <p>Followers:{props.user.follower}</p>
        <p>Following:{props.user.following}</p>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  { getUser }
)(User);
