import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: []
    };
  }


  componentDidMount() {
    // eslint-disable-next-line
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=0WNmnv3KmmYaU0L1RrDIDjdbujRrsMNY&limit=15')
      .then(response => {
        this.setState({
          gifs: response.data.data
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <div className='main-header'>
          <div className='inner'>
            <h1 className='main-title'>GifSearch</h1>
            <SearchForm />
          </div>
        </div>
        <div className='main-content'>
          <GifList data={this.state.gifs} />
        </div>
      </div>
    );
  }
}
