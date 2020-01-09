import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import styled from "styled-components";
import { updateDialog } from "../../redux/dialog";
import Signup from "../../pages/login/Login";

const StyledButton = styled(Button)`
  color: white !important;
  font-size: 18px !important;
`;

const StyledDiv = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
`;

class MyTabs extends Component {
  openSignup = () => {
    const { _updateDialog } = this.props;
    _updateDialog(true, {
      title: "Sign Up"
    });
  };

  openLogin = () => {
    const { _updateDialog } = this.props;
    _updateDialog(true, {
      title: "Login",
      content: Signup
    });
  };

  render() {
    const { user } = this.props;
    const { token } = user;
    if (token === "") {
      return (
        <StyledDiv>
          <StyledButton onClick={this.openLogin}>Login</StyledButton>
          {/* <StyledButton
            onClick={this.openSignup}
          >
            Sign Up
          </StyledButton> */}
        </StyledDiv>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  _updateDialog: updateDialog
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTabs);
