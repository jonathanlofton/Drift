import { Route, Link } from 'react-router-dom';
import React from 'react';
import ArtistIndexContainer from '../artist/artist_index_container';
import SongIndexContainer from '../song/song_index_container';
import AudioPlayerContainer from '../audioplayer/audio_player_container';
import ArtistShowContainer from '../artist/artist_show_container';
import AlbumIndexContainer from '../album/album_index_container';
import AlbumShowContainer from '../album/album_show_container';
import SearchContainer from '../search/search_container';
import PlaylistContainer from '../playlist/playlist_container';
import PlaylistShowContainer from '../playlist/playlist_show_container';
import SideBarContainer from '../sidebar/sidebar_container';

class Music extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchPlaylists();
  }

  render() {
    return (
      <div className="music-landing-page">
        <div className="sidebar">
          <SideBarContainer />
        </div>
        <div className="body">
          <div className="content">
            <Route exact path="/music/artists" component={ArtistIndexContainer} />
            <Route exact path="/music/songs" component={SongIndexContainer} />
            <Route exact path="/music/albums" component={AlbumIndexContainer} />
            <Route exact path="/music/artists/:artistId"component={ArtistShowContainer} />
            <Route exact path="/music/playlists/:playlistId" component={PlaylistShowContainer} />
            <Route exact path="/music/search" component={SearchContainer} />
            <Route exact path="/music/playlists" component={PlaylistContainer} />
          </div>

          <Route exact path="/music/albums/:albumId" component={AlbumShowContainer} />
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
