import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Signup from "../../pages/login/Login";
import Appbar from "../NavigationBar/Appbar";
import Dialog from "../dialog/Dialog";
import UsersList from "../../pages/users/UsersList";
import { userCheckToken } from "../../redux/user";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount = () => {
    const { _userCheckToken } = this.props;
    _userCheckToken();
  };

  render = () => {
    return (
      <div>
        <Appbar />
        <Switch>
          <Route exact path="/" render={() => <Signup />} />
          <Route path="/users" render={() => <UsersList />} />
        </Switch>
        <Dialog />
      </div>
    );
  };
}

const mapDispatchToProps = {
  _userCheckToken: userCheckToken
};

export default connect(null, mapDispatchToProps)(App);
