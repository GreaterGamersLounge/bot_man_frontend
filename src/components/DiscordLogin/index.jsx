import React, { Component } from "react";
import { Skeleton } from "@material-ui/lab";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import DiscordLogo from "./Discord-Logo+Wordmark-Color.svg";
import { Link, withRouter } from "react-router-dom";
import { URL } from "../config";

const DiscordButton = styled(Button)`
  background-color: #7289da !important;
  margin-top: 20px !important;
  margin-right: 10px !important;
`;

class DiscordLogin extends Component {
  // constructor(props) {
  //   super(props);
  //   const placeholderList = [];
  //   for (let i = 0; i < 4; i += 1) {
  //     placeholderList.push(
  //       <StyledSkeleton key={i} variant="rect" animation="wave" height={100} />
  //     );
  //   }
  //   this.state = {
  //     displayList: [],
  //     placeholderList
  //   };
  // }

  handleLogin = e => {
    console.log(e);
    e.preventDefault();
    // this.props.history.push("/dashboard");
    window.location.href = `${URL}/auth/discord`;
    // window.location.href = "/auth/discord";
    // window.location.replace("/auth/discord");
  };

  render() {
    return (
      // <Link to="/auth/discord">
      <DiscordButton onClick={this.handleLogin}>
        <img height={47} src={DiscordLogo} alt="Discord Logo" />
      </DiscordButton>
      // </Link>
    );
  }
}

export default withRouter(DiscordLogin);
