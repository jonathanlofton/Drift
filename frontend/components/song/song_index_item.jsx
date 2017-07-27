import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistSongModal from '../playlist_song_modal/new_playlist_song_modal';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.makeFirstSongInPlaylist(this.props.song);
  }

  render() {
    const { song } = this.props;
    return (
      <li className="song-item">
        <div>
          <button onClick={this.handleClick}>Play</button>
          <Link to={`/songs/${song.id}`}>
            <p>{song.title}</p>
          </Link>
          <PlaylistSongModal song={song}/>
        </div>
      </li>
    );
  }
}

export default SongIndexItem;
