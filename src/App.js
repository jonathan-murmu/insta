import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Logo from './components/Logo/Logo';
import Photo from './components/Photo/Photo';
import Layout from './hoc/Layout/Layout';
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <Layout>
          { routes }
          <Photo height="293px" grid="grid" width="293px" src="https://s3-ap-southeast-1.amazonaws.com/he-public-data/insta_8fb860e0.jpeg"/>
        </Layout>
      </div>
    );
  }
}

export default App;
