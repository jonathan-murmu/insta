import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import instalogo from '../../../assets/images/logo.png';

const toolbar = ( props ) => {
  return (
    <header className={ classes.Toolbar }>
      <div className={ classes.Logo }>
        <Logo source={instalogo} />
      </div>
      <div className={classes.Logo}>
      <Logo source="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2000px-Instagram_logo.svg.png" />
      </div>
      <nav className={ classes.DesktopOnly }>
        <NavigationItems />
      </nav>
    </header>
  );
}

export default toolbar;