import React from 'react';
import classes from './Logo.css';
import instalogo from '../../assets/images/logo.png';

const logo = (props) => (
  <div className={classes.Logo} style={{height: props.height}}>
        <img src={instalogo} alt="Logo" />
    </div>
);

export default logo;