import React from 'react';
import { Link } from 'react-router-dom';


class Playlist extends React.Component {
  constructor (props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchPlaylists();
  }

  render() {
    if (this.props.playlists.byId.length > 0) {
      const { playlists } = this.props;
      console.log(this.props)
      return (
        <div className="playlist-index-content">
          <h1 className="playlist-index-title">Playlists</h1>
          <ul className="playlist-index">
            {playlists.byId.map(playlist => (
              <li className="playlist-list-item">
                <Link to={`/music/playlists/${playlist.id}`} className="playlist-link">
                  <img src={playlist.image_url} alt={playlist.name} className="playlist-photo"/>
                  <div className="playlist-info">
                    <h1 className="playlist-name">{playlist.name}</h1>
                    <h1 className="playlist-creator">By: {playlist.creator}</h1>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <ul className="playlist-index-content">
          <h1 className="playlist-index-title">Playlists</h1>
        </ul>
      );
    }
  }
}

export default Playlist;
