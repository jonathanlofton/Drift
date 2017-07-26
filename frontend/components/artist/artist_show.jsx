import React from 'react';
import ArtistAlbumShow from './artist_show';


class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    const artistId = this.props.match.params.artistId;
    this.props.fetchArtist(artistId);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(song){
    this.props.loadArtist(this.props.artists.all_songs, song.id);
  }


  render() {
    if (this.props.artists.albums) {
      console.log(this.props);
      const { artists: artist } = this.props;
      const { albums } = this.props.artists;
      const playButton = 'http://res.cloudinary.com/jlofton/image/upload/v1500777291/playerwhite_w2wcy1.svg';
      return (
        <div className="artist-show">
          <div className="artist-show-banner">
            <h1>{artist.name}</h1>
            <img src={artist.show_image_url} alt={artist.name} />
          </div>

          <div className="artist-show-albums">
            <ul className="artist-album-list">
              {albums.map((album, idx) => (
                <div className="artist-show-content" key={idx}>
                  <li className="artist-album-list-item" key={idx}>
                    <img src={album.image_url} alt="" className="artist-album-img" />
                    <h1>{album.name}</h1>
                  </li>
                  <ul className="artist-album-song-list">
                    {album.songs.map((song, idx) => (
                      <li className="artist-album-song-list-item" key={idx}>
                        <button onClick={() => this.handleClick(song)}><img src={playButton} alt=""/></button>
                        <h1>{song.title}</h1>
                      </li>
                    ))}
                  </ul>
                </div>
              ),
              )}
            </ul>
          </div>
        </div>

      );
    } else {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      )
    }
  }
}


export default ArtistShow;
//
