import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import Home from './components/Home/home';
import Layout from './hoc/Layout/layout'

export default class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" component={Home} ></Route>
                </Switch>
            </Layout>
            
        )
    }
}

