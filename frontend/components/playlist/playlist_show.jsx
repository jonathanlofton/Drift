import React from 'react';
import { withRouter } from 'react-router-dom';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    const playlistId = this.props.match.params.playlistId;
    this.props.fetchPlaylist(playlistId);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(song){
    this.props.loadPlaylist(this.props.playlist.currentPlaylist.all_songs, song.id);
  }

  handleDelete(id) {
    this.props.deletePlaylist(id).then((data) => this.props.history.push('/music/playlists'));
  }

  handleDeleteSong(id) {
    this.props.deletePlaylistSong(id);
  }

  render() {
    console.log(this.props)
    if (this.props.playlist.currentPlaylist) {
      const playButton = 'http://res.cloudinary.com/jlofton/image/upload/v1500777291/playerwhite_w2wcy1.svg';
      const { currentPlaylist } = this.props.playlist;
      const { creator } = this.props.playlist.currentPlaylist;
      const { songs } = currentPlaylist;
      return (
        <div className="playlist-show">
          <div className="playlist-info">
            <img src={currentPlaylist.image_url} />
            <div className="playlist-title-and-delete">
              <button className="playlist-delete-button" onClick={() => this.handleDelete(currentPlaylist.id)}>Delete</button>
              <h1 className="playlist-title">{currentPlaylist.name}</h1>
              <h1 className="creator-name">By: { creator }</h1>
            </div>
          </div>

          <ul className="playlist-song-index">
            <div className="table-titles">
              <h1 className="table-title">TITLE</h1>
              <h1 className="table-artist">ARTIST</h1>
              <h1 className="created-at">CREATED AT</h1>
            </div>
            { songs.map((song, idx) => (
              <li key={idx} className="playlist-song-item">
                <button onClick={() => this.handleClick(song)}>
                  <img src={playButton} />
                </button>
                <h1 className="song-title">{song.title}</h1>
                <h1 className="artist-name">{song.artist.name}</h1>
                <h1 className="created-at">{song.artist.created_at.slice(0,10)}</h1>
                <button onClick={() => this.handleDeleteSong()} className="delete-button"></button>
              </li>
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div>
        <h1>Playlist Show page</h1>
      </div>
    );
  }
}

export default withRouter(PlaylistShow);
