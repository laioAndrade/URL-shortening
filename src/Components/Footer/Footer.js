import React from 'react';
import classes from './Footer.module.css';
import logo from '../../assets/images/logo.svg';
import fbIcon from '../../assets/images/icon-facebook.svg';
import instaIcon from '../../assets/images/icon-instagram.svg';
import ptIcon from '../../assets/images/icon-pinterest.svg';
import twtIcon from '../../assets/images/icon-twitter.svg';


const footer = () => (
  <div className={classes.Footer}> 
    <img src={logo} alt="logo"/>
    <div className={classes.List}>
      <span>Features</span>
      <span>Link Shortening</span>
      <span>Branded Links</span>
      <span>Analytics</span>      
    </div>
    <div className={classes.List}>
      <span>Resources</span>
      <span>Blog</span>
      <span>Developers</span>
      <span>Support</span>
    </div>
    <div className={classes.List}>
      <span>Company</span>
      <span>About</span>
      <span>Our Team</span>
      <span>Careers</span>
      <span>Contact</span>
    </div>
    <div>
      <img className={classes.Icon} src={fbIcon} alt="facebook icon"/>
      <img className={classes.Icon} src={twtIcon} alt="twitter icon"/>
      <img className={classes.Icon} src={ptIcon} alt="pinterest icon"/>
      <img className={classes.Icon} src={instaIcon} alt="instagram icon"/>
    </div>
  </div>
);

export default footer;