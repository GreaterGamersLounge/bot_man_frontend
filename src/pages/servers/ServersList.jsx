import React, { Component } from "react";
import { Skeleton } from "@material-ui/lab";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadAvailableServers } from "../../redux/server";
import ServerIcon from "../../components/servers/ServerIcon";

const StyledDiv = styled.div`
  width: 80vw;
  padding-left: 10vw;
`;

const ServerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledSkeleton = styled(Skeleton)`
  margin: 10px;
  border-radius: 20px;
`;

class ServersList extends Component {
  constructor(props) {
    super(props);
    const placeholderList = [];

    for (let i = 0; i < 10; i += 1) {
      placeholderList.push(
        <StyledSkeleton
          key={i}
          variant="rect"
          animation="wave"
          height={175}
          width={175}
        />
      );
    }

    this.state = {
      placeholderList,
    };
  }

  componentDidMount = () => {
    const { _loadAvailableServers } = this.props;

    _loadAvailableServers();
  };

  render() {
    const { placeholderList } = this.state;
    const { servers } = this.props;

    let serverIcons =
      servers &&
      servers.map((server) => (
        <ServerIcon
          key={server.uid}
          name={server.name}
          iconUrl={server.iconUrl}
          uid={server.uid}
        />
      ));

    return (
      <StyledDiv>
        <h1>Servers</h1>
        <ServerContainer>
          {serverIcons.length === 0 ? placeholderList : serverIcons}
        </ServerContainer>
      </StyledDiv>
    );
  }
}

ServersList.propTypes = {
  servers: PropTypes.array,
  _loadAvailableServers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  servers: state.servers.servers,
});

const mapDispatchToProps = {
  _loadAvailableServers: loadAvailableServers,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServersList);
