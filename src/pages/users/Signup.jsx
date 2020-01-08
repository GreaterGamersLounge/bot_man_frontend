import React, { Component } from "react";
import { connect } from "react-redux";
import { userPostFetch } from "../../redux/user";

class Signup extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { _userPostFetch } = this.props;
    _userPostFetch(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>

        <label>Email</label>
        <br />
        <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />
        <br />

        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <br />

        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = {
  _userPostFetch: userPostFetch
};

export default connect(null, mapDispatchToProps)(Signup);
