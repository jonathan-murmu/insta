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
        <div className="container">
        <main>
          {this.props.children}
        </main>
        </div>
        
      </Aux>
    );
  }
}

export default Layout;