import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Appbar from "../NavigationBar/Appbar";
import Dialog from "../dialog/Dialog";
import UsersList from "../../pages/users/UsersList";
import { userCheckToken } from "../../redux/user";
import { connect } from "react-redux";
import HomePage from "../../pages/home";
import QuotesList from "../../pages/quotes/QuotesList";

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
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/users" render={() => <UsersList />} />
          <Route path="/quotes" render={() => <QuotesList />} />
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
