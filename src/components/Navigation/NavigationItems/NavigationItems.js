import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = ( props ) => {
  return (
    <ul className={ classes.navigationItems }>
      <NavigationItem link="/">Home</NavigationItem>
    </ul>
  );
}

export default navigationItems;