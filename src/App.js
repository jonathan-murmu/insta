import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Logo from './components/Logo/Logo';
import Layout from './hoc/Layout/Layout';
import Photogrid from './containers/Photogrid/Photogrid';
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Redirect to="/" />
      </Switch>
    );

    return (
        <Layout>
          { routes }
          <Photogrid/>
        </Layout>
    );
  }
}

export default App;
