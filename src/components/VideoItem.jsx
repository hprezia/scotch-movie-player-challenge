import React, { Component } from 'react';

class VideoItem extends Component {

  render() {
    return (
      <div className="videos-playlist-item"
        onClick={this.props.onClick}>
        <img alt={this.props.title} className='image' src={this.props.imageUrl}/>
        <div className='overlay'>
          <p>{this.props.title}</p>
          <p>{this.props.year}</p>
        </div>
      </div>
    );
  }
}

export default VideoItem;
