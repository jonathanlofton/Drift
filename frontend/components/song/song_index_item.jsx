import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistSongModal from '../playlist_song_modal/new_playlist_song_modal';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(song) {
    this.props.loadArtist(this.props.songIds, song.id, song);
  }

  render() {
    const { song } = this.props;
    const playButton = 'https://s3-us-west-2.amazonaws.com/spotifyclone-dev/buttons/play-song-white.svg';
    return (
      <li className="song-item">
        <button onClick={() => this.handleClick(song)} className="play-button"><img src={playButton} /></button>
        <PlaylistSongModal song={song} className="modal-button"/>
        <p className="song-title">{song.title}</p>
        <p className="artist-name">{song.artist.name}</p>
        <p className="created-at">{song.created_at.slice(0, 10)}</p>
      </li>
    );
  }
}

export default SongIndexItem;
