/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable prefer-template */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import classes from './Input.module.css';
import axios from '../../axios';

class Input extends Component {
  state = {
    urls: [],
    newUrl: null
  }

  submitHandler = (event) => {
    event.preventDefault();
    if(this.state.newUrl){
      axios.post('/', {
        "url": this.state.newUrl
      }).then(response => {
          const updateURLs = [...this.state.urls, response.data.hashid];
          this.setState({
            urls: updateURLs
          });
        });
    }
  }

  changeHandler = (event) => {
    const newURL = event.target.value;
    this.setState({
      newUrl: newURL
    }) 
  }

  render() {
    let urlList = null;
    if(this.state.urls) {
      urlList = this.state.urls.map(url => {
      return <p key={url}>{'https://rel.ink/'+url}</p>;
      })
      
    }
    return (
      <>
        <form className={classes.Shorten} onSubmit={this.submitHandler}>
          <input 
            className={classes.Input} 
            type="text" 
            placeholder="Shorten a link here..."
            onChange={this.changeHandler}/>
          <button className={classes.Button} type="submit">Shorten it</button>
        </form>
        {urlList}
      </>
    );
  }  
}

export default Input;