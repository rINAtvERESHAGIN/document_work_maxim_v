import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {Toolbar, IconButton, makeStyles, Typography, AppBar, withStyles} from "@material-ui/core";
import classNames from 'classnames';
import {drawerWidth} from "../../MainLayout";
import {withRouter} from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
// import {Input} from 'antd';
// import {SearchOutlined} from "@ant-design/icons";

const styles = theme => ({
    appBar: {
        position: "fixed",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    "appBarShift-left": {
        marginLeft: drawerWidth
    },
    hide: {
        display: "none"
    },
    title: {
        flexGrow: 1,
        marginLeft: "15px",
        cursor: "pointer"
    }
});

const TopBar = props => {

    const {classes} = props;
    const {open, handleSidebarOpen} = props;
    // const {token} = useSelector(state => state.auth, shallowEqual);
    // let history = useHistory();
    const {history} = props;
    const {handleClickOpen} = props;

    const tokenConfig = token => {
        // Headers
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if (token) {
            config.headers['Authorization'] = `Token ${token}`;
        }

        return config;
    };
    const handleLogout = () => {
        // fetch(
        //   'api/auth/logout'
        //   , {
        //     method: 'POST',
        //     headers: tokenConfig(token).headers,
        //     body: null
        //   })
        //   .then(() => {
        //     dispatch({
        //       // type: LOGOUT_SUCCESS
        //     });
        //   }).then(() => {
        //   history.push('/');
        // });
    };

    const handleWelcomeHome = () => {
        const {history} = props;
        history.push('/home');
    };


    return (
        <AppBar
            className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
                [classes[`appBarShift-left`]]: open
            })}

            id={'test_test_test'}
        >
            <Toolbar disableGutters={!open} style={{flexGrow: 1}} id={'main_header_back_to_top'}>

                <Typography
                    className={classes.title}
                    variant="h6"
                    color="inherit"
                    noWrap
                    onClick={handleWelcomeHome}
                >
                    Обработка документальной базы данных
                </Typography>

                <IconButton color="inherit"
                    // onClick={handleClickOpen}
                >
                    <PersonOutlineIcon/>
                </IconButton>

                <IconButton color="inherit"
                    // onClick={handleLogout}
                >
                    <ExitToAppIcon/>
                </IconButton>

            </Toolbar>
        </AppBar>
    )
}

export default withRouter(withStyles(styles)(TopBar));
