import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Tabs from "./Tabs";
import styled from "styled-components";
import SignupLogin from "./SignupLogin";

const StyledH1 = styled.h1`
  margin: 5px;
  padding-right: 10px;
`;

function Appbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <StyledH1>BotMan</StyledH1>
        <Tabs />
        <SignupLogin />
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;
