import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistSongModal from '../playlist_song_modal/new_playlist_song_modal';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(song) {
    this.props.loadArtist(this.props.songIds, song.id);
  }

  render() {
    const { song } = this.props;
    const playButton = 'http://res.cloudinary.com/jlofton/image/upload/v1500777291/playerwhite_w2wcy1.svg';
    console.log(this.props)
    return (
      <li className="song-item">
        <PlaylistSongModal song={song}/>
        <button onClick={() => this.handleClick(song)} className="play-button"><img src={playButton} /></button>
        <p>{song.title}</p>
      </li>
    );
  }
}

export default SongIndexItem;
