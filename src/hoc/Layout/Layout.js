import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
  state = {};

  render () {
    return (
      <Aux>
        {/* toolbar component */}
        <Toolbar />

        {/* side bar component */}

        {/* main component */}
        <main style={{background:"#fafafa"}}>
          {this.props.children}
        </main>        
      </Aux>
    );
  }
}

export default Layout;