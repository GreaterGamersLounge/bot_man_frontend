import React, { Component } from "react";
import { connect } from "react-redux";
import Timeline from "../../components/graphs/Timeline";

class ServerStats extends Component {
  render() {
    const { uid } = this.props.match.params;

    return <Timeline uid={uid} />;
  }
}

const mapStateToProps = (state) => ({
  // servers: state.servers.servers,
});

const mapDispatchToProps = {
  // _loadAvailableServers: loadAvailableServers,
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerStats);
