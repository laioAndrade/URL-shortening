import React from 'react';
import classes from './Statistics.module.css';

import brandIcon from '../../assets/images/icon-brand-recognition.svg';
import detailedIcon from '../../assets/images/icon-detailed-records.svg';
import customizableIcon from '../../assets/images/icon-fully-customizable.svg';

const statistics = () => (
  <div className={classes.Statistics}>
    <h2>Advanced Statistics</h2>
    <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
    <div className={classes.BoxGrid}>
      <div className={classes.Box} >
        <img src={brandIcon} alt="brand icon"/>
        <h4>Brand Recognition</h4> 
          <span>Boost your brand recognition with each click.
          Generic links don’t mean a thing. Branded links help instil confidence 
          in your content.</span>
      </div>
      <div className={classes.Box} >
        <img src={detailedIcon} alt="brand icon"/>
        <h4>Detailed Records</h4> 
        <span>Gain insights into who is clicking your links. 
        Knowing when and where people engage with your content helps inform better decisions.</span>
         
      </div>
      <div className={classes.Box} >
        <img src={customizableIcon} alt="brand icon"/>
        <h4>Fully Customizable</h4> 
        <span>Improve brand awareness and content discoverability 
        through customizable links, supercharging audience engagement.</span>
      </div>
    </div>
  
  </div>
)

export default statistics;