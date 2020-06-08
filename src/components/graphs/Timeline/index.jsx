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
    console.log("test");
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
          console.log("DATA");
          console.log(data);

          // this.setState({
          //   data,
          // });
        });
    }
  };

  componentDidMount = () => {
    this.getData();
  };

  render = () => {
    const { uid } = this.props;

    return <div key={uid}>{uid}</div>;
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
