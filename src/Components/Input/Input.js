/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import classes from './Input.module.css';

class Input extends Component {
  render() {
    return (
      <div className={classes.Shorten}>
        <input className={classes.Input} type="text" placeholder="Shorten a link here..."/>
        <button className={classes.Button} type="submit">Shorten it</button>
      </div>
    );
  }  
}

export default Input;