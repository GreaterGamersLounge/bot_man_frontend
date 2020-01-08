import React from "react";
import Signup from "../../pages/users/Signup";
import Appbar from "../NavigationBar/Appbar";
import Dialog from "../dialog/Dialog";

function App() {
  return (
    <div>
      <Appbar />
      <Signup />
      <Dialog />
    </div>
  );
}

export default App;
