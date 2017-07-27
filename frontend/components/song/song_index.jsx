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
    const songss = songs.slice(0, songs.length - 1)
    console.log(this.props)
    return (
      <div className="song-index-content">
        <h1>Song Page</h1>
        <ul className="song-index-list">
          <div className="table-titles">
            <h1 className="table-title">TITLE</h1>
            <h1 className="table-artist">ARTIST</h1>
            <h1 className="created-at">CREATED AT</h1>
          </div>
          {songss.map( song =>
            <SongIndexItem key={song.id} song={song}
            loadArtist={loadArtist} songIds={songIds} />)}
        </ul>
      </div>

    )
  }
}

export default SongIndex;
