import React, { Component } from 'react';

import { getMovies } from './service/api';

import VideoItem from './components/VideoItem';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      movies: [],
      playing: null,
    }
  }

  componentDidMount() {
    this._getMovies();
  }

  async _getMovies() {
    const movies = await getMovies();
    console.log(movies)
    this.setState({
      movies: movies.data,
      playing: movies.data[0],
    });
  }

  render() {
    const movies = this.state.movies.map((movie) => {
      const index = this.state.movies.indexOf(movie);
      return (
        <VideoItem
          key={index}
          imageUrl={movie.poster}
          title={movie.name}
          year={movie.year}
          onClick={() => {
            this.setState({
              playing: movie,
            });
        }} />
      );
    });

    return (
      <div className="videos-container">
        <div className="video-player">
        {
          !!this.state.playing
          ?
          <iframe title={this.state.playing.name} className='frame-container'
            src={this.state.playing.trailer}>
          </iframe>
          :
          null
        }
        </div>

        <div className="videos-playlist">
          {movies}
        </div>

      </div>
    );
  }
}

export default App;
