import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
  <button className={classes.Button} type="submit">{props.text}</button>
);

export default button;