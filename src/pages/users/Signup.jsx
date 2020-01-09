import React, { Component } from "react";
import { connect } from "react-redux";
import { userPostFetch } from "../../redux/user";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align:center
`;

const StyledButton = styled(Button)`
  margin-top:20px !important;
`

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
    const { _userPostFetch } = this.props;
    _userPostFetch(this.state);
  };

  render() {
    return (
      <StyledDiv>
        <TextField
          label="Email"
          name="email"
          fullWidth
          value={this.state.email}
          onChange={this.handleChange} />
        <br/>
        <TextField
          label="Password"
          name="password"
          value={this.state.password}
          fullWidth
          type="password"
          autoComplete="current-password"
          onChange={this.handleChange} />
        <br />
        <StyledButton color="primary" style={{margin:"0 auto"}} variant="contained" onClick={this.handleSubmit}>Login</StyledButton>
      </StyledDiv>
    );
  }
}

const mapDispatchToProps = {
  _userPostFetch: userPostFetch
};

export default connect(null, mapDispatchToProps)(Signup);
