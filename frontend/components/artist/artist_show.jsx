import React from 'react';
import ArtistAlbumShow from './artist_show';


class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
    console.log("what the hell");
    const artistId = this.props.match.params.artistId;
    this.props.fetchArtist(artistId);
    this.handleClick = this.props.receiveCurrentSong.bind(this);
  }

  handleClick(song){
    this.props.receiveCurrentSong(song)
  }


  render() {
    if (this.props.artists.albums) {
      console.log(this.props)
      const { artists: artist } = this.props;
      const { albums } = this.props.artists;
      console.log(albums)
      return (
        <div className="artist-show">
          <div className="artist-show-banner">
            <h1>{artist.name}</h1>
            <img src={artist.show_image_url} alt={artist.name} />
          </div>

          <div className="artist-show-albums">
            <ul className="artist-album-list">
              {albums.map(album => (
                <div>
                  <li className="artist-album-list-item">
                    <img src={album.image_url} alt="" className="artist-album-img" />
                    <h1>{album.name}</h1>
                  </li>
                  <ul className="artist-album-song-list">
                    {album.songs.map(song => (
                      <li className="artist-album-song-list-item">
                        <button onClick={() => this.handleClick(song)}>Play</button>
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
