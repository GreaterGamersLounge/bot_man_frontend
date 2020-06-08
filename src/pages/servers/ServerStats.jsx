import React, { Component } from "react";
import { Skeleton } from "@material-ui/lab";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { loadAvailableServers } from "../../redux/server";

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

class ServerStats extends Component {
  componentDidMount = () => {
    // const { _loadAvailableServers } = this.props;
    // _loadAvailableServers();
  };

  render() {
    // const { placeholderList } = this.state;
    // const { servers } = this.props;

    const { uid } = this.props.match.params;

    return <div key={uid}>{uid}</div>;
  }
}

// ServerStats.propTypes = {
//   servers: PropTypes.array,
//   _loadAvailableServers: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => ({
  // servers: state.servers.servers,
});

const mapDispatchToProps = {
  // _loadAvailableServers: loadAvailableServers,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerStats);
