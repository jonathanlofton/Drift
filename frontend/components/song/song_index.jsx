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
    console.log(this.props);
    const { songs, receiveCurrentSong } = this.props;
    return (
      <ul id="song-index-list">
        {songs.map(song => <SongIndexItem key={song.id} song={song}
          receiveCurrentSong={receiveCurrentSong}/>)}
      </ul>
    )
  }
}

export default SongIndex;
