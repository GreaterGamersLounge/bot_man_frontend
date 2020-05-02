import React, { Component } from "react";
import { Skeleton } from "@material-ui/lab";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loadAvailableServers } from "../../redux/server";
import ServerIcon from "../../components/ServerIcon";

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
          height={128}
          width={128}
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

    console.log(servers);

    const serverIcons =
      servers &&
      servers.map((server, index) => (
        <ServerIcon name={server.name} key={index} />
      ));

    return (
      <StyledDiv>
        <h1>Servers</h1>
        <ServerContainer>
          {servers ? serverIcons : placeholderList}
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
