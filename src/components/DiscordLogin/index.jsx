import React, { Component } from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import DiscordLogo from "./Discord-Logo+Wordmark-Color.svg";
import { API_URL } from "../config";

const DiscordButton = styled(Button)`
  background-color: #7289da !important;
  margin-top: 20px !important;
  margin-right: 10px !important;
`;

class DiscordLogin extends Component {
  handleLogin = e => {
    e.preventDefault();
    window.location.href = `${API_URL}/users/auth/discord`;
  };

  render() {
    return (
      <DiscordButton onClick={this.handleLogin}>
        <img height={47} src={DiscordLogo} alt="Discord Logo" />
      </DiscordButton>
    );
  }
}

export default DiscordLogin;
