import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const StyledTab = styled(Tab)`
  font-size: 20px !important;
`;

const StyledTabs = styled(Tabs)`
  margin-top: auto;
  margin-bottom: 0px;
`;

const MyTabs = props => {
  return (
    <StyledTabs value={props.location.pathname} scrollButtons="auto">
      <StyledTab to="/" value="/" label="Home" component={Link} />
      <StyledTab to="/users" value="/users" label="Users" component={Link} />
      <StyledTab label="Home3" />
    </StyledTabs>
  );
};

export default withRouter(MyTabs);
