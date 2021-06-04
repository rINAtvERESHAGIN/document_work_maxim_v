import React from "react";
import {Switch} from "react-router";
import {Redirect, Route, withRouter} from 'react-router-dom';
import RouteWithLayout from "./core/navigation/RouterWithLayout";
import MainLayout from "./layout/MainLayout/MainLayout";
import Login from "./views/StartPages/Login";
import MiniLayout from "./layout/MiniLayout/MiniLayout";
import Registration from "./views/StartPages/Registration";
import NotFound from "./views/StartPages/NotFound";
import HomeMenu from "./views/Home/HomeMenu";
import UploadFiles from "./views/UploadFiles";
// import MainZone from "./shedule-part/Contructor/components/MainZone/MainZone";
import MusicMainContainer from "./views/MusicMainContainer";

class Routes extends React.Component {
    render() {
        return (
            <Switch>

                <Route path={"/entry"}
                       exact
                       render={() => {
                           if (true) {
                               return <Redirect to={'/login'}/>
                           }
                       }}

                />
                {/*---main layout*/}
                <RouteWithLayout component={HomeMenu} layout={MainLayout} path={"/home"}/>
                {/*<RouteWithLayout component={UploadFiles} layout={MainLayout} path={"/constructor"}/>*/}
                <RouteWithLayout component={MusicMainContainer} layout={MainLayout} path={"/constructor"}/>


                {/*-mini layout*/}

                <RouteWithLayout component={Login} layout={MiniLayout} path={"/login"}/>
                <RouteWithLayout component={Registration} layout={MiniLayout} path={"/registration"}/>
                <Redirect exact from="/" to="/entry"/>

                {/*the end of normal routers */}
                <RouteWithLayout component={NotFound} layout={MiniLayout}/>
            </Switch>
        )
    }
}

export default withRouter(Routes);
