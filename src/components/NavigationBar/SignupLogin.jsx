import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import styled from "styled-components";
import { updateDialog } from "../../redux/dialog";
import Signup from "../../pages/users/Signup";

const StyledButton = styled(Button)`
  color: white !important;
  font-size: 18px !important;
`;

const StyledDiv = styled.div`
  margin-bottom: 0px;
  margin-top: auto;
  float:right
`;

class MyTabs extends Component{
  openSignup = () => {
    this.props._updateDialog(true, {
      title: "Sign Up"
    })
  }

  openLogin = () => {
    this.props._updateDialog(true, {
      title: "Login",
      content:Signup,
    })
  }

  render() {
    if (this.props.user.token=="") {
      return (
        <StyledDiv>
          <StyledButton
            onClick={this.openLogin}
          >
            Login
          </StyledButton>
          {/* <StyledButton
            onClick={this.openSignup}
          >
            Sign Up
          </StyledButton> */}
        </StyledDiv>
      )
    }
    else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  _updateDialog: updateDialog
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTabs);