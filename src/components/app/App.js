import React from "react";
import logo from "./logo.svg";
import StyledApp, { Logo, Header, Link } from "./App.styled";

function App() {
  return (
    <StyledApp>
      <Header className="App-Header">
        <Logo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
    </StyledApp>
  );
}

export default App;
