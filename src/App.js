import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import SinglePhoto from './containers/SinglePhoto/SinglePhoto';
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/photos/:id" component={SinglePhoto} />
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
