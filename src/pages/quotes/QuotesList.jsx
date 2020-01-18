import React, { Component } from "react";
import { Skeleton } from "@material-ui/lab";
import { Card } from "@material-ui/core";
import { connect } from "react-redux";
import styled from "styled-components";
import { getQuoteList } from "../../redux/quotes";

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
    if (this.state.displayList.length !== quoteList.length) {
      this.props._getQuoteList();
    }
    const tempList = [];
    for (let item in quoteList) {
      tempList.push(<Card></Card>);
    }
  };

  render() {
    const { displayList, placeholderList } = this.state;
    return (
      <StyledDiv>
        <h1>Quotes</h1>
        {displayList.length === 0 ? placeholderList : displayList}
      </StyledDiv>
    );
  }
}

const mapStateToProps = state => ({
  quoteList: state.quotes
});

const mapDispatchToProps = {
  _getQuoteList: getQuoteList
};

export default connect(mapStateToProps, mapDispatchToProps)(QuotesList);
