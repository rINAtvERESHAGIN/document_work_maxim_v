import React from "react";
import PropTypes from 'prop-types';
import TopBar from "./components/TopBar";
import {withStyles} from "@material-ui/core";

const styles = () => ({
  root: {
    paddingTop: 64,
    height: '100%'
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: '100%',
    opacity: "0.9",
  }
});


class MiniLayout extends React.PureComponent {
  render() {
    const {children} = this.props;
    const {classes} = this.props;
    return (
      <React.Fragment>
        <TopBar/>
        <main className={classes.content}>
          {children}
        </main>
      </React.Fragment>
    )
  }
}

MiniLayout.propTypes = {
  className: PropTypes.string
};

export default withStyles(styles)(MiniLayout);
