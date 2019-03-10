import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gif: []
    };
  }


  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/trending&api_key=0WNmnv3KmmYaU0L1RrDIDjdbujRrsMNY&limit=15')
    .then(response => response.json())
    .then(responseData => {
      this.setState({ gifs: responseData.data });
    });
  }

  render() {
    return (
      <div>
        <div className='main-header'>
          <div className='inner'>
            <h1 className='main-title'>GifSearch</h1>
            <SearchForm />
          </div>
        </div>
        <div className='main-content'>
          <GifList />
        </div>
      </div>
    );
  }
}
