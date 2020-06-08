import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { API_URL } from "../../config";
import { ResponsiveCalendar } from "@nivo/calendar";

const ContainerDiv = styled.div`
  width: 80vw;
  height: 300px;
  padding-top: 50px;
  padding-left: 10vw;
`;

class Timeline extends Component {
  constructor(props) {
    super();

    this.state = {
      data: null,
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

    if (data.length === 0) return "";

    return (
      <ResponsiveCalendar
        data={data}
        from={data[0].day}
        to={data[data.length - 1].day}
        minValue={1}
        emptyColor="#eeeeee"
        colors={[
          "#C7E9C0",
          "#A1D99B",
          "#74C476",
          "#41AB5D",
          "#238B45",
          "#006D2C",
          "#00441B",
        ]}
        align="top"
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        yearSpacing={65}
        monthBorderColor="#050505"
        monthBorderWidth={2}
        dayBorderWidth={3}
        dayBorderColor="#ffffff"
        legends={[
          {
            anchor: "bottom-right",
            direction: "row",
            translateY: 0,
            itemCount: 5,
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
      <ContainerDiv key={uid}>{data && this.buildCalendar()}</ContainerDiv>
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
