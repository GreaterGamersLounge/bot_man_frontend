import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import styled from "styled-components";
import { updateDialog } from "../../redux/dialog";
import Signup from "../../pages/login/Login";
import { userLogout } from "../../redux/user";

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

    if (user.isSignedIn) {
      const { _userLogout } = this.props;

      return (
        <StyledDiv>
          <StyledButton onClick={_userLogout}>Log Out</StyledButton>
        </StyledDiv>
      );
    } else {
      return (
        <StyledDiv>
          <StyledButton onClick={this.openLogin}>Login</StyledButton>
        </StyledDiv>
      );
    }
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  _updateDialog: updateDialog,
  _userLogout: userLogout
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTabs);
