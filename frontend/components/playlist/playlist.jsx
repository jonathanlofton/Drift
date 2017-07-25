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
      return (
        <ul className="playlist-index">
          {playlists.byId.map(playlist => (
            <li>
              <Link to={`/music/playlists/${playlist.id}`} className="playlist-item">
                {playlist.name}
              </Link>
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <ul className="playlist-index">
          <h1>Playlist</h1>
        </ul>
      );
    }
  }
}

export default Playlist;
