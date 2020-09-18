import React from 'react';
import classes from './Info.module.css';
import img from '../../assets/images/illustration-working.svg';
import Button from '../../Components/Button/Button';

const info = () => (
  <div className={classes.Info}>
    <div className={classes.InfoText}>
      <h1>More than just shorter links</h1>
      <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
      <Button type="submit" text="Get Started" />
    </div>
    <div className={classes.Img}>
      <img src={img} alt="illustration working"/>
    </div>
  </div>
)
  
export default info;