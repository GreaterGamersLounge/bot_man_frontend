import React from "react";
import { Tabs, Tab } from '@material-ui/core';
import { withStyles } from "@material-ui/styles";
import { Link, withRouter } from "react-router-dom";

const StyledTabs = withStyles(theme => ({
  root: {
    fontSize:'20px'
  }
}))(props=><Tab {...props}/>)

function MyTabs() {
  let location=window.location.pathname;
  const [value, setValue] = React.useState(location);

  const changeTabValue=(_,newValue)=>{
    setValue(newValue);
  }

  return (
    <Tabs
      value={value}
      onChange={changeTabValue}
      style={{ marginTop: "auto", marginBottom: 0 }}
      scrollButtons="auto"
    >
      <StyledTabs to='/' value='/' label="Home" component={Link}/>
      <StyledTabs to='/users' value='/users' label="Users" component={Link} />
      <StyledTabs label="Home3" />
    </Tabs>
  );
}

export default withRouter(MyTabs);