import React from 'react';
import NewPlaylistModalContainer from '../playlist/new_playlist_modal_container';
import { Route, Link } from 'react-router-dom';

class SideBar extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }


  render () {

    if (this.props.playlist.byId.length > 0) {
      const { byId } = this.props.playlist;
      return (
        <div className="nav-bar-box">
          <div className="search-button">
            <Link to="/music/search"><h1>Search</h1></Link>
          </div>
          <Link to="/music/artists"><h1>Artists</h1></Link>
          <Link to="/music/songs"><h1>Songs</h1></Link>
          <Link to="/music/albums"><h1>Albums</h1></Link>
          <Link to="/music/playlists"><h1>Playlists</h1></Link>
          <div className="sidebar-playlists">
            <h1 className="create-playlist"><NewPlaylistModalContainer /></h1>
            <h1 className="my-playlists">My Playlists</h1>
            <ul className="sidebar-playlist-list">
              { byId.map(playlist => (
                <li key={playlist.id} className="sidebar-playlist-list-item">
                  <Link to={`/music/playlists/${playlist.id}`}>
                    <h1>{playlist.name}</h1>
                  </Link>
                </li>
              )) }
            </ul>
          </div>
        </div>
      );
    }
    return (
      <div className="nav-bar-box">
        <div className="search-button">
          <Link to="/music/search"><h1>Search</h1></Link>
        </div>
        <Link to="/music/artists"><h1>Artists</h1></Link>
        <Link to="/music/songs"><h1>Songs</h1></Link>
        <Link to="/music/albums"><h1>Albums</h1></Link>
        <Link to="/music/playlists"><h1>Playlists</h1></Link>
        <div className="sidebar-playlists">
          <h1><NewPlaylistModalContainer /></h1>
        </div>
      </div>
    );
  }
}

export default SideBar;
