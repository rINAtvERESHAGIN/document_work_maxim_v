import React from "react";
import {Box, makeStyles} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  box: {
    height: 'auto%',
    width: 'auto',
  },
}));

const TabPanel = (props) => {
  const {children, value, index, ...other} = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`force-tabpanel-${index}`}
      aria-labelledby={`force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={0} className={classes.box}>
          {children}
        </Box>
      )}
    </div>
  );
}


export default TabPanel;
