import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this.props);
    if (this.props.songsArray.playlist.length > 0) {
      const song = this.props.songsArray.playlist[0];
      console.log(song.song_url);
      return (
        <ReactAudioPlayer
          src={song.song_url}
          autoplay
          controls
          volume
        />
      );
    } else {
      return (
        <ReactAudioPlayer
          src={''}
          controls
          volume
        />
      );
    }
  }
}


export default AudioPlayer;
