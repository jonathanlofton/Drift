import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    if (this.props.songsArray.playlist.length > 0) {
      const song = this.props.songsArray.playlist[0];
      return (
        <ReactAudioPlayer
          src={song.song_url}
          autoPlay
          controls
        />
      );
    } else {
      return (
        <div id="audio-player" className="audio-player-wrapper">
          <div className="audio-player-image">
            <span className="audio-player-song-name"></span>
          </div>

          <div className="audio-player-controls">
            <span className="audio-player-progress">
              <span className="audio-player-progress-bar"></span>
            </span>
            <span className="audio-player-button-wrappers">
              <a role="button" className="audio-player-button small icon-backward"></a>
              <a role="button" className="audio-player-button audio-player-place-pause-button icon-play"></a>
              <a role="button" className="audio-player-button small icon-forward"></a>
            </span>
          </div>
        </div>
      );
    }
  }
}


export default AudioPlayer;
