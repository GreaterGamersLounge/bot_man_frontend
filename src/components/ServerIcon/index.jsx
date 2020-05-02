import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  width: 128px;
  height: 128px;
`;

class ServerIcon extends Component {
  render() {
    const { name } = this.props;

    return <h1>{name}</h1>;
  }
}

export default ServerIcon;
