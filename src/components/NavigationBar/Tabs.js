import React from "react";
import { Tabs, Tab } from '@material-ui/core';
import History from "../../History";
import { withStyles } from "@material-ui/styles";

const StyledTabs = withStyles(theme => ({
  root: {
    fontSize:'20px'
  }
}))(props=><Tab {...props}/>)


function getTabValue(){
  let location=window.location.pathname;
  let tabValue=0;
  if(location.indexOf('/users')===0){
    tabValue=1;
  } else {
    tabValue=0;
  }
  return tabValue;
}

function MyTabs() {
  const [value, setValue] = React.useState(0);
  let tempValue=getTabValue();
  if(tempValue!==value){
    setValue(tempValue);
  }

  const changeTabValue=(event,newValue)=>{
    setValue(newValue);
    if(newValue===0){
      History.push('/');
    } else if(newValue===1){
      History.push('/users');
    }
  }

  return (
    <Tabs
      value={value}
      onChange={changeTabValue}
      style={{ marginTop: "auto", marginBottom: 0 }}
      scrollButtons="auto"
    >
      <StyledTabs label="Home"/>
      <StyledTabs label="Users" />
      <StyledTabs label="Home3" />
    </Tabs>
  );
}

export default MyTabs;