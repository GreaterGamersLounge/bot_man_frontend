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

class QuotesList extends Component {
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

  componentDidMount = () => {
    const { quoteList } = this.props;
    const tempList = [];
    for (let item in quoteList) {
      tempList.push(<Card></Card>);
    }
  };

  render() {
    const { displayList, placeholderList } = this.state;
    return <StyledDiv></StyledDiv>;
  }
}

const mapStateToProps = state => ({
  quoteList: state.dialog
});

const mapDispatchToProps = {
  _userPostFetch: userLogin,
  _updateDialog: updateDialog
};

export default connect(mapStateToProps, mapDispatchToProps)(QuotesList);
