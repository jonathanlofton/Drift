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
    console.log(this.props)
    const { songs } = this.props;
    return (
      <div>
        <ul>
          {songs.map(song => <SongIndexItem key={song.id} song={song} />)}
        </ul>
      </div>
    )
  }
}

export default SongIndex;
