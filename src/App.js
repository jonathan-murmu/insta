import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Redirect to="/" />
      </Switch>
    );

    return (
        <Layout>
          { routes }
        </Layout>
    );
  }
}

export default App;
