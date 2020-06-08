import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { API_URL } from "../../config";

const StyledDiv = styled.div`
  width: 80vw;
  padding-left: 10vw;
`;

class Timeline extends Component {
  constructor(props) {
    super();

    this.state = {
      data: [],
    };
  }

  getData = () => {
    const { uid } = this.props;
    const token = localStorage.token;

    if (token) {
      console.log(token);
      fetch(`${API_URL}/stats/servers/${uid}/timeline`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          this.setState({
            data: data.timeline,
          });
        });
    }
  };

  componentDidMount = () => {
    this.getData();
  };

  render = () => {
    const { uid } = this.props;
    const { data } = this.state;

    return (
      <div key={uid}>
        <span>{uid}</span>
        {data &&
          data.map((timeline) => (
            <div key={timeline.day}>{`${timeline.day}:${timeline.value}`}</div>
          ))}
      </div>
    );
  };
}

// Timeline.propTypes = {
//   servers: PropTypes.array,
//   _loadAvailableServers: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => ({
  // servers: state.servers.servers,
});

const mapDispatchToProps = {
  // _loadAvailableServers: loadAvailableServers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
