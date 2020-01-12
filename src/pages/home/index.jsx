import React, { Component } from "react";
import { Skeleton } from "@material-ui/lab";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60vw;
  padding-left: 20vw;
`;

const StyledSkeleton = styled(Skeleton)`
  margin-top: 10px;
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
    const placeholderList = [];
    for (let i = 0; i < 4; i += 1) {
      placeholderList.push(
        <StyledSkeleton key={i} variant="rect" animation="wave" height={100} />
      );
    }
    this.state = {
      displayList: [],
      placeholderList
    };
  }

  // componentDidMount = () => {
  //   const { userList } = this.props;
  //   const tempList = [];
  //   for (let item in userList) {
  //     tempList.push(
  //       <Card>

  //       </Card>
  //     )
  //   }
  // };

  render() {
    const { displayList, placeholderList } = this.state;
    return (
      <StyledDiv>
        <h1>Home</h1>
        {displayList.length === 0 ? placeholderList : displayList}
      </StyledDiv>
    );
  }
}

export default HomePage;
