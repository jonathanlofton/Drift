import React from 'react';
import ArtistIndexItem from './artist_index_item';


class ArtistIndex extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchArtists();
  }

  render() {
    console.log(this.props);

    const { artists } = this.props;
    return (

      <div className="artist-index">
        <ul>
          {artists.map( artist => <ArtistIndexItem key={artist.id} artist={artist} />)}
        </ul>
      </div>

    );
  }
}


export default ArtistIndex;


//

    // if ( this.props.artists ) {
    // const { artists } = this.props;
    // }
