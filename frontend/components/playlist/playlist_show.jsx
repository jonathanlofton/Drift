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

  render() {
    if (this.props.playlist.currentPlaylist) {
      const playButton = 'http://res.cloudinary.com/jlofton/image/upload/v1500777291/playerwhite_w2wcy1.svg';
      const { currentPlaylist } = this.props.playlist;
      const { songs } = currentPlaylist;
      return (
        <div className="playlist-show">
          <div className="playlist-info">
            <img src={currentPlaylist.image_url} />
            <div className="playlist-title-and-delete">
              <button className="playlist-delete-button" onClick={() => this.handleDelete(currentPlaylist.id)}>Delete</button>
              <h1 className="playlist-title">{currentPlaylist.name}</h1>
            </div>
          </div>

          <ul className="playlist-song-index">
            { songs.map((song, idx) => (
              <li key={idx} className="playlist-song-item">
                <button onClick={() => this.handleClick(song)}>
                  <img src={playButton} />
                </button>
                {song.title}
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
