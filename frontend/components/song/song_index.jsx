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
    const { songs, makeFirstSongInPlaylist } = this.props;
    console.log(this.props)
    return (
      <ul id="song-index-list">
        {songs.map(song => <SongIndexItem key={song.id} song={song}
          makeFirstSongInPlaylist={makeFirstSongInPlaylist}/>)}
      </ul>
    )
  }
}

export default SongIndex;
