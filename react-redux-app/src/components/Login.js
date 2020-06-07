import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

function validateLoginForm() {
  var b = !0;
  var g = $("#userName").val(),
    n = $("#userPwd").val();
  return (
    "" === g
      ? ($("#userName-info").html("Required."),
        $("#userName").css("border", "#e66262 1px solid"),
        (b = !1))
      : $("#userName").css("border", "none"),
    "" === n
      ? ($("#userEmail-info").html("Required."),
        $("#userPwd").css("border", "#e66262 1px solid"),
        (b = !1))
      : $("#userPwd").css("border", "none"),
    b
  );
}
function validateSignUpForm() {
  var b = !0;
  var g = $("#userName").val(),
    n = $("#userPwd").val();
  return (
    "" === g
      ? ($("#userName-info").html("Required."),
        $("#userName").css("border", "#e66262 1px solid"),
        (b = !1))
      : $("#userName").css("border", "none"),
    "" === n
      ? ($("#userEmail-info").html("Required."),
        $("#userPwd").css("border", "#e66262 1px solid"),
        (b = !1))
      : $("#userPwd").css("border", "none"),
    b
  );
}

class Login extends Component {
  state = { show: true, login: true, signup: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  showLogin = () => {
    this.setState({ login: true, signup: false });
  };

  showSignUp = () => {
    this.setState({ login: false, signup: true });
  };

  render() {
    return (
      <main>
        {this.state.show && (
          <div id="modal">
            <div className="modal-content">
              <span className="close" onClick={this.hideModal}>
                &times;
              </span>
              <div className="hdr-text">
                <div className="form-switch">
                  <span className="login" onClick={this.showLogin}>
                    Login
                  </span>
                  <span className="signup" onClick={this.showSignUp}>
                    Sign Up
                  </span>
                </div>
              </div>
              {this.state.login && (
                <div className="loginform">
                  <h2>Login</h2>
                  <form id="login-form" encType="multipart/form-data">
                    <label> Username:</label>
                    <input type="text" id="username" name="username" />
                    <label> Password:</label>
                    <input type="text" id="userpwd" name="password" />
                    <div className="submitBtn">
                      <a>
                        <input name="send" id="submit" />
                        <label>Login</label>
                      </a>
                    </div>
                  </form>
                </div>
              )}
              {this.state.signup && (
                <div className="signupform">
                  <h2>Sign Up</h2>
                  <form id="signup-form" encType="multipart/form-data">
                    <label> Username:</label>
                    <input type="text" id="userName" name="username" />
                    <label> Password:</label>
                    <input type="text" id="userpwd" name="password" />
                    <div className="submitBtn">
                      <a className="signup">
                        <label>Sign Up</label>
                        <input name="send" id="submit" />
                      </a>
                    </div>
                  </form>
                </div>
              )}

              <p>Please enter your username and password</p>
            </div>
          </div>
        )}
      </main>
    );
  }
}

export default Login;
