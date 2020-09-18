import React from 'react';
import classes from './Info.module.css';
import img from '../../assets/images/illustration-working.svg';

const info = () => (
  <div className={classes.Info}>
    <div className={classes.InfoText}>
      <h1>More than just shorter links</h1>
      <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
      <button type="submit">Get Started</button>
    </div>
    <div className={classes.Img}>
      <img src={img} alt="illustration working"/>
    </div>
  </div>
)
  
export default info;