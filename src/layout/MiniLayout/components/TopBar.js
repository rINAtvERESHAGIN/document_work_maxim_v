import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import {withRouter} from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none'
  },
  title: {
    flexGrow: 1,
    color: 'white',
    'text-decoration': 'none'
  },
}));

const TopBar = props => {
  const {className, to, staticContext, ...rest} = props;

  const classes = useStyles();

  const handleOnClick = () => {
    const {history} = props;
    history.push('/');
  };

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <Typography variant="h6"
                    className={classes.title}
                    onClick={handleOnClick}
                    style={{cursor: "pointer"}}
        >
          Обработка документальной базы данных
        </Typography>


      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default withRouter(TopBar);
