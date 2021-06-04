import React from "react";
import MenuTile from "./components/MenuTile";
import {Grid, withStyles} from '@material-ui/core';
import {withRouter} from "react-router-dom";

const imgSrc = "/images/";

class HomeMenu extends React.Component {
    render() {
        const {classes} = this.props;
        const {match: {path}} = this.props;

        return (
            <div className={classes.container}>
                {/*<HomeRouters></HomeRouters>*/}
                <Grid container
                      spacing={3}
                      direction="column"
                      justify="center"
                      alignItems="center"
                >
                    <Grid container direction="row" justify="center" alignItems="center" item spacing={3} xs={12}>
                        <Grid item>
                            <MenuTile title={"Просмотр всех файлов"}
                                      description={"Обработка данных по загруженным файлам"}
                                      to={`/constructor`}
                                      image={`${imgSrc}undraw_cloud_files_wmo8.svg`}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const styles = () => ({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default withStyles(styles)(withRouter(HomeMenu));
