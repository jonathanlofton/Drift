import React from 'react';


class NewPlaylistSongForm extends React.Component {
  constructor (props) {
    super(props)
    this.props.fetchPlaylists();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(playlistId) {
  return (e) =>  {
    e.preventDefault();
    this.props.createPlaylistSong({ playlist_song: { playlist_id: playlistId, song_id: this.props.song.id } }).then(this.props.closeModal())
    };
  }

  render () {
    const playlists = this.props.playlist.byId;
    return (
      <div className="new-playlist-song-form">
        <div className="modal-form">
          <label className="create-playlist-form-label">
            <h1 className="add-song-to-playlist-title">Choose playlist</h1>
            <ul className="playlist-list">
              {playlists.map(playlist => (
                <li className="playlist-item">
                  <button onClick={this.handleClick(playlist.id)}>{playlist.name}</button>
                </li>
              ))}
            </ul>
          </label>
        </div>
      </div>
    )
  }
}

export default NewPlaylistSongForm
