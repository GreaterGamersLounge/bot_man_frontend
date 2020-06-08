import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTab = styled(Tab)`
  font-size: 20px !important;
`;

const StyledTabs = styled(Tabs)`
  margin-top: auto;
  margin-bottom: 0px;
`;

const MyTabs = (props) => {
  const { location } = props;
  const { pathname } = location;

  const page = pathname.split("/")[1];

  return (
    <StyledTabs value={page} scrollButtons="auto">
      <StyledTab to="/" value="" label="Home" component={Link} />
      <StyledTab to="/users" value="users" label="Users" component={Link} />
      <StyledTab
        to="/servers"
        value="servers"
        label="Servers"
        component={Link}
      />
    </StyledTabs>
  );
};

MyTabs.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(MyTabs);
