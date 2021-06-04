import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import HelpIcon from '@material-ui/icons/Help';

import a11Props from "../../../../../common/a11Props";
import {AppBar, Toolbar} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    boxShadow:'none'
  },
});

const DialogTabs = (props) => {
  const classes = useStyles();
  const {handleChange, value} = props;

  const tabs = {
    "account": {
      icon: <PersonOutlineIcon/>,
      label: "АККАУНТ",
    },
    "help": {
      icon: <HelpIcon/>,
      label: "ПОМОЩЬ",
    }
  };

  const tabsCollection = ["account", "help"];

  return (
    // <Paper square className={classes.root}>
      <AppBar position="static" color="default" className={classes.root}>
        <Toolbar>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
          >

            {tabsCollection.map((tabId, index) => (
              <Tab key={index} {...tabs[tabId]} {...a11Props(index)}/>
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
    // </Paper>
  );
}


export default DialogTabs;
