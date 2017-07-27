import React from 'react';
import PlaylistSongModal from '../playlist_song_modal/new_playlist_song_modal';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.props.fetchAlbum(this.props.match.params.albumId);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(song) {
    this.props.loadArtist(this.props.albums.all_songs, song.id)
  }

  render() {
    console.log(this.props)
    if (this.props.albums.albumPlaylist.length > 0) {
      const { artist, image_url, name, songs } = this.props.albums;
      const playButton = 'http://res.cloudinary.com/jlofton/image/upload/v1500777291/playerwhite_w2wcy1.svg';
      return (
        <div className="content">
          <div className="album-show-page">
            <div className="album-info">
              <img src={image_url} />
              <div className="artist-info">
                <h1 className="album-name">{name}</h1>
                <h1 className="artist-name">By: {artist}</h1>
              </div>
            </div>
            <ul className="album-song-index">
              {songs.map(song => (
                <li className="album-song-item">
                  <button onClick={() => this.handleClick(song)} className="play-button"><img src={playButton} /></button>
                  <PlaylistSongModal song={song} className="add-song-to-playlist-modal" className="modal-button"/>
                  <p>{song.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
    return (
      <div>
        <h1>Album Show Page</h1>
      </div>
    );
  }
}

export default AlbumShow;
