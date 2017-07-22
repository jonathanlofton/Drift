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
          autoPlay
          controls
        />
      );
    } else {
      return (
        <div id="audio-player" class="audio-player-wrapper">
          <div class="audio-player-image">
            <span class="audio-player-song-name"></span>
          </div>

          <div class="audio-player-controls">
            <span class="audio-player-progress">
              <span class="audio-player-progress-bar"></span>
            </span>
            <span class="audio-player-button-wrappers">
              <a role="button" class="audio-player-button small icon-backward"></a>
              <a role="button" class="audio-player-button audio-player-place-pause-button icon-play"></a>
              <a role="button" class="audio-player-button small icon-forward"></a>
            </span>
          </div>
        </div>
      );
    }
  }
}


export default AudioPlayer;
