import { Route } from 'react-router-dom';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ArtistIndexContainer from '../artist/artist_index_container';
import SongIndexContainer from '../song/song_index_container';

class Music extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="music-landing-page">

        <div className="sidebar">

        </div>

        <div className="body">
          <div className="content">
            <ArtistIndexContainer />
            <SongIndexContainer />
          </div>
        </div>


        <footer className="footer">
          <ReactAudioPlayer
            src=""
            controls
          />
        </footer>
      </div>
    );
  }
}

export default Music;
