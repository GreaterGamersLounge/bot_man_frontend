import React, { Component } from "react";
// import { Toolbar, Card } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import styled from "styled-components";
import {
  TableCell,
  TableRow,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  Table,
  Button
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const StyledDiv = styled.div`
  width: 60vw;
  padding-left: 20vw;
`;

const StyledSkeleton = styled(Skeleton)`
  margin-top: 10px;
`;

class UsersList extends Component {
  constructor(props) {
    super(props);
    const placeholderList = [];
    for (let i = 0; i < 4; i += 1) {
      placeholderList.push(
        <TableRow>
          <TableCell>
            <StyledSkeleton
              key={i}
              variant="rect"
              animation="wave"
              height={100}
            />
          </TableCell>
          <TableCell>
            <StyledSkeleton
              key={i}
              variant="rect"
              animation="wave"
              height={100}
            />
          </TableCell>
          <TableCell>
            <StyledSkeleton
              key={i}
              variant="rect"
              animation="wave"
              height={100}
            />
          </TableCell>
          <TableCell>
            <StyledSkeleton
              key={i}
              variant="rect"
              animation="wave"
              height={100}
            />
          </TableCell>
          <TableCell>
            <StyledSkeleton
              key={i}
              variant="rect"
              animation="wave"
              height={100}
            />
          </TableCell>
        </TableRow>
      );
    }
    this.state = {
      displayList: [],
      placeholderList
    };
  }

  userObject = {
    0: {
      id: 56435245,
      email: "fakeEmail@gmail.com",
      name: "fake_name#5416"
    }
  };

  componentDidMount = () => {
    const { userList } = this.props;
    const tempList = [];
    for (let item in this.userObject) {
      tempList.push(
        <TableRow key={item}>
          <TableCell>{this.userObject[item].id}</TableCell>
          <TableCell>{this.userObject[item].name}</TableCell>
          <TableCell>{this.userObject[item].email}</TableCell>
          <TableCell>
            <Button>
              <EditIcon />
            </Button>
          </TableCell>
          <TableCell>
            <Button>
              <DeleteIcon />
            </Button>
          </TableCell>
        </TableRow>
      );
    }
    this.setState({ displayList: tempList });
  };

  render() {
    const { displayList, placeholderList } = this.state;
    return (
      <StyledDiv>
        <h1>Users</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayList.length === 0 ? placeholderList : displayList}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledDiv>
    );
  }
}

export default UsersList;
