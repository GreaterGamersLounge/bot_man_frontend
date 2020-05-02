import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContainerDiv = styled.div`
  width: 175px;
  height: 175px;
  margin: 10px;
  background-color: black;
  position: relative;
  align-content: center;
  border-radius: 20px;
  border: 3px solid rgba(0, 0, 0, 0);

  &:hover {
    border: 3px solid cyan;
  }
`;

const StyledIcon = styled.img`
  width: 128px;
  height: 128px;
  position: absolute;
  left: calc((100% - 128px) / 2);
  margin: 0;
`;

const ServerName = styled.span`
  color: white;
  width: 175px;
  position: absolute;
  top: calc(100% - 40px);
  height: 40px;
  text-align: center;
  line-height: 40px;
`;

class ServerIcon extends Component {
  render() {
    const { name, iconUrl, uid } = this.props;

    return (
      <Link to={`/servers/${uid}`}>
        <ContainerDiv key={uid}>
          <StyledIcon src={iconUrl} alt={name} />
          <ServerName>{name}</ServerName>
        </ContainerDiv>
      </Link>
    );
  }
}

export default ServerIcon;
