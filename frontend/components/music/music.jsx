import { Route } from 'react-router-dom';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ArtistIndexContainer from '../artist/artist_index_container';
import SongIndexContainer from '../song/song_index_container';
import AudioPlayerContainer from '../audioplayer/audio_player_container';
import ArtistShowContainer from '../artist/artist_show_container';

class Music extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="music-landing-page">

        <div className="sidebar">
          <div className="nav-bar-box">
            <div className="search-button">
              <h1>Search</h1>
            </div>
            <h1>Artists</h1>
            <h1>Your Music</h1>
            <h1>Playlists</h1>
          </div>
        </div>

        <div className="body">
          <div className="content-title">
            <h1>Content</h1>
          </div>
          <div className="content">
            <Route exact path="/music/artists" component={ArtistIndexContainer} />
            <Route exact path="/music/artists/:artistId" component={ArtistShowContainer} />
            <SongIndexContainer />
          </div>
        </div>


        <footer className="footer">
          <div className="audio-player-container">
            <AudioPlayerContainer />
          </div>
        </footer>
      </div>
    );
  }
}

export default Music;
