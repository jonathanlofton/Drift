import React from 'react';


class ArtistIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    const artistId = this.props.match.params.artistId;
    this.props.fetchArtist(artistId);
  }


  render() {
    if (this.props.artists.name) {
      const { artists: artist } = this.props;
      return (
        <div className="artist-show">
          <h1>{artist.name}</h1>
          <img src={artist.image_url} alt={artist.name} />
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


export default ArtistIndex;
