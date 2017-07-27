import React from 'react';
import NewPlaylistModalContainer from '../playlist/new_playlist_modal_container';
import { Route, Link } from 'react-router-dom';

class SideBar extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="nav-bar-box">
        <div className="search-button">
          <Link to="/music/search"><h1>Search</h1></Link>
        </div>
        <Link to="/music/artists"><h1>Artists</h1></Link>
        <h1>Your Music</h1>
        <Link to="/music/songs"><h1>Songs</h1></Link>
        <Link to="/music/albums"><h1>Albums</h1></Link>
        <div className="sidebar-playlists">
          <Link to="/music/playlists"><h1>Playlists</h1></Link>
          <h1><NewPlaylistModalContainer /></h1>
        </div>
      </div>
    );
  }
}

export default SideBar;
