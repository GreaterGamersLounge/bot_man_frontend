import React from "react";
import { AppBar, Grid, Toolbar } from '@material-ui/core';
import Tabs from './Tabs';
import styled from "styled-components";

const StyledH1 = styled.h1`
  margin: 5;
  padding-right: 10;
`

function Appbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <StyledH1>BotMan</StyledH1>
        <Tabs />
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;