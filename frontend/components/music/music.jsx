import { Route, Link } from 'react-router-dom';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ArtistIndexContainer from '../artist/artist_index_container';
import SongIndexContainer from '../song/song_index_container';
import AudioPlayerContainer from '../audioplayer/audio_player_container';
import ArtistShowContainer from '../artist/artist_show_container';
import AlbumIndexContainer from '../album/album_index_container';

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
            <Link to="/music/artists"><h1>Artists</h1></Link>
            <h1>Your Music</h1>
            <h1>Playlists</h1>
            <Link to="/music/songs"><h1>Songs</h1></Link>
            <Link to="/music/albums"><h1>Albums</h1></Link>
          </div>
        </div>

        <div className="body">
          <div className="content">
            <Route exact path="/music/artists" component={ArtistIndexContainer} />
            <Route exact path="/music/songs" component={SongIndexContainer} />
            <Route exact path="/music/albums" component={AlbumIndexContainer} />
          </div>
          <Route exact path="/music/artists/:artistId" component={ArtistShowContainer} />
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
