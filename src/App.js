import React, {Component} from "react";
import Layout from "./hoc/Layout/Layout";
import MainList from "./containers/MainList/MainList";
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'

class App extends Component{
    render() {
        let routes = (
            <Switch>
                <Route path="/" exact component={MainList} />
                <Redirect to="/" />
            </Switch>
        )

        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}
export default withRouter(App) ;

