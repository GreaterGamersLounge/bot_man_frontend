import React from "react";
import { Switch, Route } from "react-router";
import Signup from "../../pages/login/Login";
import Appbar from "../NavigationBar/Appbar";
import Dialog from "../dialog/Dialog";
import UsersList from "../../pages/users/UsersList";

function App() {
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
}

export default App;
