import React from 'react';
import SongIndexItem from './song_index_item';


class SongIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSongs();
  }

  render(){
    const { songs, loadArtist, songIds } = this.props;
    console.log(this.props)
    return (
      <div className="song-index-content">
        <h1>Song Page</h1>
        <ul className="song-index-list">
          {songs.map(song => <SongIndexItem key={song.id} song={song}
            loadArtist={loadArtist} songIds={songIds} />)}
        </ul>
      </div>

    )
  }
}

export default SongIndex;
