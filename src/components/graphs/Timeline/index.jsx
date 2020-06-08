import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { API_URL } from "../../config";
import { ResponsiveCalendar } from "@nivo/calendar";

const ContainerDiv = styled.div`
  width: 80vw;
  height: 300px;
  padding-left: 10vw;
  /* background-color: red; */
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

  buildCalendar = () => {
    const { data } = this.state;

    return (
      <ResponsiveCalendar
        data={data}
        from="2020-03-31"
        to="2020-06-08"
        emptyColor="#eeeeee"
        colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: "bottom-right",
            direction: "row",
            translateY: 36,
            itemCount: 4,
            itemWidth: 42,
            itemHeight: 36,
            itemsSpacing: 14,
            itemDirection: "right-to-left",
          },
        ]}
      />
    );
  };

  componentDidMount = () => {
    this.getData();
  };

  render = () => {
    const { uid } = this.props;
    const { data } = this.state;

    return (
      <ContainerDiv key={uid}>
        <span>{uid}</span>
        {data && this.buildCalendar()}
      </ContainerDiv>
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
