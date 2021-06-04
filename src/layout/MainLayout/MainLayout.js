import React, {useEffect, useState} from "react";
import {withStyles} from "@material-ui/core/styles";
import TopBar from "./components/TopBar/TopBar";
import {withRouter} from "react-router";
// import Home from ""
import "../../App.css";

export const drawerWidth = 240;

const styles = theme => ({
  main: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  headerHeight: {
    paddingTop: 56,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    },
  },
  scrollButtonUp: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
});

const MainLayout = props => {

  const {classes} = props;
  const {children} = props;

  const [openSidebar, setOpenSidebar] = useState(false);
  const [openMainDialog, setOpenMainDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenMainDialog(true);
  };

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  return (
    <div style={{height: "100%"}}>
      <TopBar open={openSidebar}
              handleSidebarOpen={handleSidebarOpen}
              handleClickOpen={handleClickOpen}
      />

      <div className={`${classes.headerHeight} ${classes.main}`}>
        {children}
      </div>

    </div>
  )
};


export default withStyles(styles)(withRouter(MainLayout));
