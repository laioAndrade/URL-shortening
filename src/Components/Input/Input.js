/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable prefer-template */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ls from 'local-storage';
import classes from './Input.module.css';
import axios from '../../axios';
import Button from '../Button/Button';

class Input extends Component {
  state = {
    urls: [],
    newUrl: null
  }

  componentDidMount() {
    const urlSaved = ls.get('urls') || [];
    this.setState({urls: urlSaved});
    console.log(urlSaved);
  }


  submitHandler = (event) => {
    event.preventDefault();
    if(this.state.newUrl){
      axios.post('/', {
        "url": this.state.newUrl
      }).then(response => {
          const urlS = {
            url: this.state.newUrl,
            shortUrl: "https://rel.ink/" + response.data.hashid
          }

          const updateURLs = [...this.state.urls, urlS];
          this.setState({
            urls: updateURLs,

          });
          ls.set('urls', updateURLs);
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
      urlList = this.state.urls.map(id => {
      return (
        <div key={id} className={classes.History}>
          <span >{id.url}</span>
          <div>
            <span>{id.shortUrl}</span>
            <button className={classes.Button} type="button" onClick={() => {
              navigator.clipboard.writeText(id.shortUrl)}}>Copy</button>
          </div>
        </div>
        );
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
          <Button type="submit" text="Shorten it" />
        </form>
        {urlList}
      </>
    );
  }  
}

export default Input;