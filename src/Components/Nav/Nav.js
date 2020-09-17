import React from 'react';
import logo from '../../assets/images/logo.svg';
import classes from './Nav.module.css';

const nav = () => (
  <div className={classes.Nav}>
    <div className={classes.NavRight}> 
      <img src={logo} alt="logo"/>
      <span>Features</span>
      <span>Pricing</span> 
      <span>Resources</span> 
    </div>
    <div className={classes.NavLeft}>
      <span>Login</span> 
      <button type="submit" className={classes.Button}>Sign Up</button> 
    </div>
  </div>
);

export default nav;