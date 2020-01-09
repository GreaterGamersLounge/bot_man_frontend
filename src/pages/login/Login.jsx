import React, { Component } from "react";
import { connect } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import styled from "styled-components";
import PropTypes from "prop-types";
import { userLogin } from "../../redux/user";
import { updateDialog } from "../../redux/dialog";

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin-top: 20px !important;
  margin-right: 10px !important;
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    const { _userPostFetch, _updateDialog } = this.props;
    _userPostFetch(this.state);
    _updateDialog(false, null);
  };

  render() {
    const { email, password } = this.state;
    return (
      <StyledDiv>
        <TextField
          label="Email"
          name="email"
          fullWidth
          value={email}
          onChange={this.handleChange}
        />
        <br />
        <TextField
          label="Password"
          name="password"
          value={password}
          fullWidth
          type="password"
          autoComplete="current-password"
          onChange={this.handleChange}
        />
        <br />
        <StyledButton
          color="primary"
          variant="contained"
          onClick={this.handleSubmit}
        >
          Login
        </StyledButton>
        <StyledButton
          color="primary"
          variant="contained"
          onClick={this.handleSubmit}
        >
          Cancel
        </StyledButton>
      </StyledDiv>
    );
  }
}

Login.propTypes = {
  _userPostFetch: PropTypes.func.isRequired,
  _updateDialog: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  _userPostFetch: userLogin,
  _updateDialog: updateDialog
};

export default connect(null, mapDispatchToProps)(Login);
