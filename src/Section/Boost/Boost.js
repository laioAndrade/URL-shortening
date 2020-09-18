import React from 'react';
import classes from './Boost.module.css';
import Button from '../../Components/Button/Button';

const boost = () => (
  <div className={classes.Boost}>
    <p>Boost your links today</p>
    <Button text="Get Started" />
  </div>
);

export default boost;